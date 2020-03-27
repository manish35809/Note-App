import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDl4mtJRp-mewfTHfQMbsfjll2y1eUfdFw",
  authDomain: "basic-cafe-fad15.firebaseapp.com",
  databaseURL: "https://basic-cafe-fad15.firebaseio.com",
  projectId: "basic-cafe-fad15",
  storageBucket: "basic-cafe-fad15.appspot.com",
  messagingSenderId: "1090987515710",
  appId: "1:1090987515710:web:cd6a14455d22764c7ad66f",
  measurementId: "G-JVGRLM0WB4"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore()

export default db