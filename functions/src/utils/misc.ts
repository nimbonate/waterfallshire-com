"use strict";
import functions = require("firebase-functions");
import admin = require("firebase-admin");
import sgMail = require("@sendgrid/mail");

import {
    defaultSiteData,
} from "../utils/constants";

import {
    FieldValue,
} from "firebase-admin/firestore";

admin.initializeApp(functions.config().firebase);
sgMail.setApiKey(functions.config().sendgrid_api.key);

/**
 * Turns javascript array into an HTML list tag.
 * @param array Array of items to be joined into an HTML list
 * @return Concatenated html list tags.
 *
 */
export function renderArrayAsList(array: Array<string>): string {
    let list = "<ul>"; // TODO: I tried to add a style='margin: 0;' to remove that 16px default top/bottom margin, but it isn't showing in the emails.
    array.forEach((item) => {
        if (typeof item === "object" && item !== null) {
            list = list.concat("<li>");
            for (const [key, value] of Object.entries(item)) {
                // Make the camelCased key human readable by uppercasing it for the label
                const replaced = key.replace(/([A-Z])/g, " $1");
                const sentenceCaseKey = replaced.charAt(0).toUpperCase() + replaced.slice(1);
                list = list.concat(`<b>${sentenceCaseKey}:</b> ${value}  /  `);
            }
            list = list.concat("</li>");
        } else {
            list = list.concat(`<li>${item}</li>`);
        }
    });
    list = list.concat("</ul>");
    return list;
}

/**
 * First letter turned to uppercase
 * @param string Array of items to be joined into an HTML list
 * @return Concatenated html list tags.
 *
 */
export function ucFirst(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Emails the To, CC, and BCC fields for a given item creation details
 * @param itemName - item name singular
 * @param renderedData -
 * @param incToEmails -
 * @param heading -
 * @return Returns array of promises
 *
 */
export async function emailSends(
    itemName: string,
    renderedData: string,
    heading: string,
    incToEmails: Array<string> = [],
) {
    // First check to make sure we are passing some TO data
    const toEmails = incToEmails.length !== 0 ? incToEmails : [defaultSiteData.emails.support];

    // Pack It
    const msg = {
        to: toEmails,
        from: `${defaultSiteData.name} <${defaultSiteData.emails.noreply}>`,
        replyTo: defaultSiteData.emails.noreply,
        cc: [],
        bcc: [defaultSiteData.emails.noreply],
        // Create a template on SendGrid and put the ID here: https://mc.sendgrid.com/dynamic-templates
        templateId: "d-d3b926023b1a48a5a70a97591bc02c33",
        dynamicTemplateData: {
            siteName: defaultSiteData.name,
            logoUrl: defaultSiteData.logo.url,
            logoWidth: defaultSiteData.logo.width,
            colors: defaultSiteData?.theme?.colors,
            emails: defaultSiteData.emails,
            ppUrl: defaultSiteData.customUrl ? `${defaultSiteData.customUrl}/privacy-policy` : `${defaultSiteData.projectId}.web.app/privacy-policy`,
            termsUrl: defaultSiteData.customUrl ? `${defaultSiteData.customUrl}/terms` : `${defaultSiteData.projectId}.web.app/terms`,
            itemName: ucFirst(itemName),
            heading: heading,
            renderedData: renderedData,
        },
    };

    // Send it
    return sgMail.send(msg).then(() => {
        console.log("Email sent successfully!");
    }).catch((error: any) => {
        console.error("Error with sgMail for sending!");
        console.error(error);
        console.error(error?.response?.body?.errors ?? "No response.body.errors..");
    });
}


/**
 * Turns javascript array into an HTML list tag.
 * @param collectionName string for the firestore collection name so we know what to update
 * @param incrVal number so we know how much to increment (up or down)
 * @return Promise of result of firestore increment
 *
 */
export async function increment(collectionName: string, incrVal: number) {
    return admin.firestore().collection("site").doc("counts").update({
            [collectionName]: FieldValue.increment(incrVal),
        }).then(() => {
            console.log(`Incremented ${collectionName} count by ${incrVal}`);
        }).catch((error) => {
            console.error(`Error incrementing ${collectionName} count: ${error}`);
        });
}
