import * as app from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAv9EAWBZjFfMXue5QMIIB_k2r3S3zlNAY",
    authDomain: "costs-b48c3.firebaseapp.com",
    projectId: "costs-b48c3",
    storageBucket: "costs-b48c3.appspot.com",
    messagingSenderId: "656314624859",
    appId: "1:656314624859:web:a4ca796575acfc5e2d087e",
    measurementId: "G-6ZJVTHX4F0"
  };

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
      this.db = app.database();
    }
   }
    
   export default Firebase;

