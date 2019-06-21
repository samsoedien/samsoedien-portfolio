import firebase from './node_modules/firebase/app';
import './node_modules/firebase/firestore';
// import 'firebase/auth';

const firebaseConfig = {
  authDomain: 'samsoedien-portfolio.firebaseapp.com',
  databaseURL: 'https://samsoedien-portfolio.firebaseio.com',
  projectId: 'samsoedien-portfolio',
  storageBucket: '',
  messagingSenderId: '194582540159',
  appId: '1:194582540159:web:ecdcea37dd7bae40',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
