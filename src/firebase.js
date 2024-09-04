import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCAxKvXba0rb28XuzTztSLW3ZUUyzkIryE",
    authDomain: "netflix-clone-cea3a.firebaseapp.com",
    projectId: "netflix-clone-cea3a",
    storageBucket: "netflix-clone-cea3a.appspot.com",
    messagingSenderId: "973925613436",
    appId: "1:973925613436:web:6364410db1fc396799aef9",
    measurementId: "G-FEC0K62EZJ"
  };

  const fire = initializeApp(firebaseConfig);
  const auth = getAuth();
  export {fire, auth} ;