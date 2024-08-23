import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfWbf6ByjwEI-m6hThi7NeZU1qoYjS6Fk",
  authDomain: "tarefas-d494c.firebaseapp.com",
  projectId: "tarefas-d494c",
  storageBucket: "tarefas-d494c.appspot.com",
  messagingSenderId: "767337945022",
  appId: "1:767337945022:web:c13aa21cbda24fa99c0bef"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
