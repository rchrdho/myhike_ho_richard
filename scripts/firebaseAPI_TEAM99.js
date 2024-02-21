//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyC9TMgj4nU9jU6h5elIPDSmIB1vZzB3DLU",
    authDomain: "comp1800-demo07-fa4f0.firebaseapp.com",
    projectId: "comp1800-demo07-fa4f0",
    storageBucket: "comp1800-demo07-fa4f0.appspot.com",
    messagingSenderId: "1074446690859",
    appId: "1:1074446690859:web:72bea4ba65af9d5ab5986e"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
