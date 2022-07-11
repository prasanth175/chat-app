// eslint-disable-next-line no-unused-vars
const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chat-web-app-685d5-default-rtdb.firebaseio.com",
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const { sendFcm } = require('./src/fcm');

exports.sendFcm = sendFcm;
