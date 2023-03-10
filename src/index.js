import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDdiignQxi8gnROGyGF_sot0_lff7pwdFw",
    authDomain: "fornecerg.firebaseapp.com",
    projectId: "fornecerg",
    storageBucket: "fornecerg.appspot.com",
    messagingSenderId: "289504043024",
    appId: "1:289504043024:web:02a6af574fac3c66042a95"
};
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if(user != null){
        console.log('loggen in')
    } else {
        console.log('No user')
    }
})

const app = initializeApp(firebaseConfig);