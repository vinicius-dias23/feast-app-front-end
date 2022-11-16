import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyC1RERAdbVQoKUOpgjclKlfDxvAZdogsKs",
  authDomain: "feast-d573c.firebaseapp.com",
  databaseURL: "https://feast-d573c.firebaseio.com",
  projectId: "feast-d573c",
  storageBucket: "feast-d573c.appspot.com",
  messagingSenderId: "607727810174",
  appId: "1:607727810174:web:55dccf1926cd118c060a2f",
  measurementId: "G-YS1G8NPM06"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);