"use strict";
import functions = require("firebase-functions");

import {
    feedbackCreatedHandler,
    feedbackDeletedHandler,
    feedbackUpdatedHandler,
} from "./listeners/feedback";

import {
    messageCreatedHandler,
    messageDeletedHandler,
    messageUpdatedHandler,
} from "./listeners/messages";

export const onMessageCreated = functions.firestore.document("messages/{docId}").onCreate(messageCreatedHandler);
export const onMessageUpdated = functions.firestore.document("messages/{docId}").onUpdate(messageUpdatedHandler);
export const onMessageDeleted = functions.firestore.document("messages/{docId}").onDelete(messageDeletedHandler);

export const onFeedbackCreated = functions.firestore.document("feedback/{docId}").onCreate(feedbackCreatedHandler);
export const onFeedbackUpdated = functions.firestore.document("feedback/{docId}").onUpdate(feedbackUpdatedHandler);
export const onFeedbackDeleted = functions.firestore.document("feedback/{docId}").onDelete(feedbackDeletedHandler);
