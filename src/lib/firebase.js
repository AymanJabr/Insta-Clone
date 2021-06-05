import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import seedDatabase from '../seed';

// Here we call the seed file once to generate the database

const config = {
  apiKey: 'AIzaSyAxW5BSQDwU56Y05Ni2So3zPkTRPPOA1-k',
  authDomain: 'insta-clone-8282e.firebaseapp.com',
  projectId: 'insta-clone-8282e',
  storageBucket: 'insta-clone-8282e.appspot.com',
  messagingSenderId: '269731239168',
  appId: '1:269731239168:web:774d295d6a9f9711ac8fe5',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
