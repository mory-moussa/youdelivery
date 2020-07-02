import { Component } from '@angular/core';
import *as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(){
   // Your web app's Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyB_VyFXMWYJzXgDucaEHzjocgx8Kf-WnlU",
    authDomain: "delivery-185c2.firebaseapp.com",
    databaseURL: "https://delivery-185c2.firebaseio.com",
    projectId: "delivery-185c2",
    storageBucket: "delivery-185c2.appspot.com",
    messagingSenderId: "480122996233",
    appId: "1:480122996233:web:3c7e29d7aa671fcff25ad8",
    measurementId: "G-RD8KJEQ8VG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 }
}
