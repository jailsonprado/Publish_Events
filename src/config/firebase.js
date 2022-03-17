import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyACo7rROLiAGlkjIxepX_Js1DkKSifPxZ4",
    authDomain: "eventos-123dc.firebaseapp.com",
    projectId: "eventos-123dc",
    storageBucket: "eventos-123dc.appspot.com",
    messagingSenderId: "315657813633",
    appId: "1:315657813633:web:6166ef09625fcebea95780",
    measurementId: "G-RXYR5WFQZT"
  };

  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);