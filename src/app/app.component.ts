import { Component } from '@angular/core';
import *as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(){
  const firebaseConfig = {
    apiKey: "AIzaSyD3oWRyXY1_EQojOTua8GTpmVIT0fOCYlE",
    authDomain: "youdelivery-467c4.firebaseapp.com",
    databaseURL: "https://youdelivery-467c4.firebaseio.com",
    projectId: "youdelivery-467c4",
    storageBucket: "youdelivery-467c4.appspot.com",
    messagingSenderId: "133353755221",
    appId: "1:133353755221:web:fbd68e22cf1854397afadc",
    measurementId: "G-DTF3XWLRC5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 }
}
