import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const useFirebase = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyCU_-bnnLEpESg97VSzGbiJ1kNL2l3PQZs",
        authDomain: "dkksmock.firebaseapp.com",
        databaseURL: "https://dkksmock.firebaseio.com",
        projectId: "dkksmock",
        storageBucket: "dkksmock.appspot.com",
        messagingSenderId: "420272118331",
        appId: "1:420272118331:web:5116c0bdc335473f0d1a1e"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);
    
    const test = ref('test string');
    // console.log(auth.value);
    
    return {
        // auth,
        test
    }
  }