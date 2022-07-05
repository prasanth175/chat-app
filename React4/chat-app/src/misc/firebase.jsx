import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAeBsJrRseLRbEgyafJqqG5tIS1YEEdu6U",
    authDomain: "chat-web-app-685d5.firebaseapp.com",
    databaseURL: "https://chat-web-app-685d5-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-685d5",
    storageBucket: "chat-web-app-685d5.appspot.com",
    messagingSenderId: "943062344409",
    appId: "1:943062344409:web:3c22da0a746da76dcc54c8"
  };

const app =  firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();