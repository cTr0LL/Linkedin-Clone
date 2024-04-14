import firebase from "firebase";
import { firebaseConfig } from "./firebaseconfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: "AIzaSyCMSwESc92me6a1gBk1Qiw8PLtusgJu7MY",
//   authDomain: "linkedin-clone-4703d.firebaseapp.com",
//   projectId: "linkedin-clone-4703d",
//   storageBucket: "linkedin-clone-4703d.appspot.com",
//   messagingSenderId: "596595643022",
//   appId: "1:596595643022:web:15248f2e2b426191ccefdf",
// };k

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
