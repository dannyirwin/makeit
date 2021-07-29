import firebase from 'firebase/app';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: 'AIzaSyDpOMjllqYIAxXE7kOKdah76FmCZyaUyb0',
  authDomain: 'makeit-e985d.firebaseapp.com',
  projectId: 'makeit-e985d',
  storageBucket: 'makeit-e985d.appspot.com',
  messagingSenderId: '335144033489',
  appId: '1:335144033489:web:855008872d678e475ab9f0',
  measurementId: 'G-3LGPLL5TS0'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const storage = firebase.storage();

export { storage, firebase as default };
