// firebase.js - Firebase config and initialization (compat SDK)
const firebaseConfig = {
  apiKey: "AIzaSyBc7EKiGrRDsTB1E08p_5gIN9fMbd1PR_I",
  authDomain: "thatha-4b729.firebaseapp.com",
  projectId: "thatha-4b729",
  storageBucket: "thatha-4b729.firebasestorage.app",
  messagingSenderId: "683012441237",
  appId: "1:683012441237:web:c9ea2b53f2ca7e8533479c",
  measurementId: "G-NQZ9MGLQ9S"
};

// Using Firebase compat CDN (works with simple <script> include)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const messagesRef = db.collection('messages');
