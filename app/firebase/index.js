import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDllv7vCfoYHb7R2s9Sdf8ug-sY27rEeBg",
        authDomain: "todoo-f48bf.firebaseapp.com",
        databaseURL: "https://todoo-f48bf.firebaseio.com",
        storageBucket: "todoo-f48bf.appspot.com",
    };
    firebase.initializeApp(config);
} catch (e) {
    console.log('Error while initializing db', e);
}




export var db = firebase.database().ref();
export default firebase;
