import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyAvI1v-YqXyYGQkW2gUku3XCT1ekvM_Qr4",
  authDomain: "todo-react-df70c.firebaseapp.com",
  databaseURL: "https://todo-react-df70c.firebaseio.com",
  projectId: "todo-react-df70c",
  storageBucket: "todo-react-df70c.appspot.com",
  messagingSenderId: "473250042425",
  appId: "1:473250042425:web:6e526657a4794bf853f3e8",
  measurementId: "G-MJWYHM4CYJ",
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
