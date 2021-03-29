import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = 
{
    apiKey: "AIzaSyAHnuwGmowDvtGpKQZGEdRMAL0mFSHd0FA",
    authDomain: "barter-system-583a4.firebaseapp.com",
    projectId: "barter-system-583a4",
    storageBucket: "barter-system-583a4.appspot.com",
    messagingSenderId: "586259553503",
    appId: "1:586259553503:web:d6f2b35460c65025c21d6a"
}

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();