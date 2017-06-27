import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCmWGnSUnz12rj-06NqFz_d9p-YnTQse88",
  authDomain: "gardenia-ddbf8.firebaseapp.com",
  databaseURL: "https://gardenia-ddbf8.firebaseio.com",
  projectId: "gardenia-ddbf8",
  storageBucket: "gardenia-ddbf8.appspot.com",
  messagingSenderId: "808632105888"
};

firebase.initializeApp(config);

// instance of db
export const database = firebase.database();
