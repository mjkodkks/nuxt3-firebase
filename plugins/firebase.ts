import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(({ $config }) => {
    // console.log($config);
    
    // TODO: Replace the following with your app's Firebase project configuration
    // See: https://firebase.google.com/docs/web/learn-more#config-object
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

    // getAuth(app);

    // Initialize Firebase Authentication and get a reference to the service
    // const auth = getAuth(app);
    return {
        provide: {
            firebase: app
        }
    }
})