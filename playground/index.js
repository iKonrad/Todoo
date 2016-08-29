import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDllv7vCfoYHb7R2s9Sdf8ug-sY27rEeBg",
    authDomain: "todoo-f48bf.firebaseapp.com",
    databaseURL: "https://todoo-f48bf.firebaseio.com",
    storageBucket: "todoo-f48bf.appspot.com",
};
firebase.initializeApp(config);

var db = firebase.database().ref();

db.set({
   app: {
       name: 'Todo App',
       version: '1.0.0'
   },
    isRunning: true,
    user: {
       name: 'Konrad',
        age: 25
    },
    todos: {
        '123': {
            text: 'My Item'
        }
    }
});

var todosRef = db.child('todos');

todosRef.push({ text: 'Walk the dog' });
todosRef.push({ text: 'Another todo' });

todosRef.on('child_added', (snapshot) => {
   console.log('Todo added', snapshot.val());
});