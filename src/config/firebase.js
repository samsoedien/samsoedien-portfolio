import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAGEXilIQc8wSuXyIqKl8w58WDJQg2357M',
  authDomain: 'samsoedien-portfolio.firebaseapp.com',
  databaseURL: 'https://samsoedien-portfolio.firebaseio.com',
  projectId: 'samsoedien-portfolio',
  storageBucket: '',
  messagingSenderId: '194582540159',
  appId: '1:194582540159:web:ecdcea37dd7bae40',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings();

export default firebase;
