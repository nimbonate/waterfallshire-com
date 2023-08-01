"use strict";
import functions = require("firebase-functions");
import admin = require("firebase-admin");

import {
    DocumentSnapshot,
    FieldValue,
} from "firebase-admin/firestore";

import {
    defaultSiteData,
} from "../utils/constants";

import {
    emailSends, ucFirst,
} from "../utils/misc";

/**
 * Handles when a "feedback" document is UPDATED on the "feedback" collection
 * @param snap Reference to the document snapshot returned from Firebase Firestore Functions
 * @return Returns promise(s) on if actions have been resolved.
 *
 */
export async function feedbackCreatedHandler(snap: DocumentSnapshot, context: functions.EventContext) {
    const newValues = snap.data();
    const allPromises: Array<Promise<any>> = [];

    if (!newValues) {
        return Promise.all(allPromises);
    } else {
        console.log("Recording newValues: " + JSON.stringify(newValues));
    }

    try {
        const allPromises: Array<Promise<any>> = [];
        // Unique count setup in which we need to find the sum, then average!
        let countsDocData: FirebaseFirestore.DocumentData | any = null;
        await admin.firestore().collection("site").doc("counts").get().then((countsDoc) => {
            if (countsDoc.exists) {
                countsDocData = countsDoc.data();
            } else {
                console.error("Site doc doesn't exists, so setting the default stuff we need for now!");
                countsDocData = defaultSiteData;
            }
        }).catch((error) => {
            console.log("Error getting site public document:", error);
        });

        const newSum = (countsDocData?.feedback?.sum ?? 0) + parseInt(newValues.rangeValue);
        const newCount = (countsDocData?.feedback?.count ?? 0) + 1;
        const newAverage = newSum/newCount;

        // TODO: add more data to pass!
        const renderedData = `
            <p><b>Emotion Label:</b> ${newValues.emotionLabel ? ucFirst(newValues.emotionLabel) : "Not provided"}</p>
            <p><b>Out of 100 Score:</b> ${newValues.rangeValue ? newValues.rangeValue : "Not provided"}</p>
            <p><b>Body:</b> ${newValues.body ? newValues.body : "Not provided"}</p>
        `;

        console.log("renderedData: ");
        console.log(renderedData);

        await emailSends(
            "feedback",
            renderedData,
            `New '${newValues.emotionLabel}' Feedback Added`,
            ["hi@minute.tech"],
        );

        // Increment feedback
        allPromises.push(
            admin.firestore().collection("site").doc("counts").set({
                feedback: {
                    count: FieldValue.increment(1),
                    average: newAverage,
                    sum: newSum,
                },
            }, {merge: true}).then(() => {
                console.log("Incremented feedback.");
            }).catch((error) => {
                console.error(`Error incrementing feedback: ${error}`);
            })
        );

        return Promise.all(allPromises);
    } catch (error) {
        console.error(error);
        return Promise.all(allPromises);
    }
}

/**
 * Handles when a "feedback" document is UPDATED on the "feedback" collection
 * @param change Reference to the document snapshot returned from Firebase Firestore Functions
 * @return Returns promise(s) on if actions have been resolved.
 *
 */
export async function feedbackUpdatedHandler(change: functions.Change<DocumentSnapshot>, context: functions.EventContext) {
    const newValues = change.after.data();
    const previousValues = change.before.data();
    const allPromises: Array<Promise<any>> = [];

    if (!previousValues || !newValues) {
        return Promise.all(allPromises);
    } else {
        console.log("Recording newValues: " + JSON.stringify(newValues));
        console.log("Recording previousValues: " + JSON.stringify(previousValues));
    }

    try {
        const allPromises: Array<Promise<any>> = [];
        // Logic here

        return Promise.all(allPromises);
    } catch (error) {
        console.error(error);
        return Promise.all(allPromises);
    }
}

/**
 * Handles when a "feedback" document is DELETED on the "feedbacks" collection
 * @param snap Reference to the document snapshot returned from Firebase Firestore Functions
 * @return Returns promise(s) on if actions have been resolved.
 *
 */
export async function feedbackDeletedHandler(snap: DocumentSnapshot) {
    const deletedValue = snap.data();
    const allPromises: Array<Promise<any>> = [];

    if (!deletedValue) {
        return Promise.all(allPromises);
    } else {
        console.log("deletedValue: " + JSON.stringify(deletedValue));
    }

    try {
        // TODO: logic for decrementing feedback...
        // allPromises.push(
        //     admin.firestore().collection("site").doc("counts").set({
        //         feedback: {
        //             count: FieldValue.increment(1),
        //             average: newAverage,
        //             sum: newSum,
        //         },
        //     }, {merge: true}).then(() => {
        //         console.log("Incremented feedback.");
        //     }).catch((error) => {
        //         console.error(`Error incrementing feedback: ${error}`);
        //     })
        // );
        return Promise.all(allPromises);
    } catch (error) {
        console.error(error);
        return Promise.all(allPromises);
    }
}
