"use strict";
import functions = require("firebase-functions");

import {
    DocumentSnapshot,
} from "firebase-admin/firestore";

import {
    emailSends,
    increment,
} from "../utils/misc";

/**
 * Handles when a "message" document is UPDATED on the "messages" collection
 * @param snap Reference to the document snapshot returned from Firebase Firestore Functions
 * @return Returns promise(s) on if actions have been resolved.
 *
 */
export async function messageCreatedHandler(snap: DocumentSnapshot, context: functions.EventContext) {
    const newValues = snap.data();
    const allPromises: Array<Promise<any>> = [];

    if (!newValues) {
        return Promise.all(allPromises);
    } else {
        console.log("Recording newValues: " + JSON.stringify(newValues));
    }

    try {
        const allPromises: Array<Promise<any>> = [];
        const renderedData = `
            <p><b>Name:</b> ${newValues.name ? newValues.name : "Not provided"}</p>
            <p><b>Email:</b> ${newValues.email ? newValues.email : "Not provided"}</p>
            <p><b>Body:</b> ${newValues.body ? newValues.body : "Not provided"}</p>
        `;

        console.log("renderedData: ");
        console.log(renderedData);

        const toEmails: Array<string> = [];
        toEmails.push(newValues.email);

        await emailSends(
            "message",
            renderedData,
            "Thanks for the message!",
            toEmails,
        );

        // Increment messages
        allPromises.push(increment("messages", 1));

        return Promise.all(allPromises);
    } catch (error) {
        console.error(error);
        return Promise.all(allPromises);
    }
}

/**
 * Handles when a "message" document is UPDATED on the "messages" collection
 * @param change Reference to the document snapshot returned from Firebase Firestore Functions
 * @return Returns promise(s) on if actions have been resolved.
 *
 */
export async function messageUpdatedHandler(change: functions.Change<DocumentSnapshot>, context: functions.EventContext) {
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
        // Logic here

        return Promise.all(allPromises);
    } catch (error) {
        console.error(error);
        return Promise.all(allPromises);
    }
}

/**
 * Handles when a "message" document is DELETED on the "messages" collection
 * @param snap Reference to the document snapshot returned from Firebase Firestore Functions
 * @return Returns promise(s) on if actions have been resolved.
 *
 */
export async function messageDeletedHandler(snap: DocumentSnapshot) {
    const deletedValue = snap.data();
    const allPromises: Array<Promise<any>> = [];

    if (!deletedValue) {
        return Promise.all(allPromises);
    } else {
        console.log("deletedValue: " + JSON.stringify(deletedValue));
    }

    try {
        // Decrement
        allPromises.push(increment("messages", -1));

        return Promise.all(allPromises);
    } catch (error) {
        console.error(error);
        return Promise.all(allPromises);
    }
}
