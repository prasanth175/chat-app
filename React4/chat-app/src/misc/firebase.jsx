/* eslint-disable no-console */
import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
    apiKey: "AIzaSyAeBsJrRseLRbEgyafJqqG5tIS1YEEdu6U",
    authDomain: "chat-web-app-685d5.firebaseapp.com",
    databaseURL: "https://chat-web-app-685d5-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-685d5",
    storageBucket: "chat-web-app-685d5.appspot.com",
    messagingSenderId: "943062344409",
    appId: "1:943062344409:web:3c22da0a746da76dcc54c8"
  };

export const fcmVapidKey =
 'BMUNFPv6_Zcw4PhTNZZJs1TxCtZ7hqT9RnmKhp4uktPdHlGdjGg--7OZjh9ebxjUEIUr7__zsN9DNaLa2XpQxrY';

const app =  firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('europe-west3');

export const messaging = firebase.messaging.isSupported() ? app.messaging() : null;

if(messaging) {
  messaging.getToken({vapidKey: 'BMUNFPv6_Zcw4PhTNZZJs1TxCtZ7hqT9RnmKhp4uktPdHlGdjGg--7OZjh9ebxjUEIUr7__zsN9DNaLa2XpQxrY'});

  messaging.onMessage(({notification}) => {
    
    const { title, body } = notification
    Toast.info({title, description: body, duration: 0}) 
   }) 
}

if(isLocalhost) {
  functions.useEmulator('localhost', 5001);
}

