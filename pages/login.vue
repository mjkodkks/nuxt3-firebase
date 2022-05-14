<script lang="ts" setup>import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from '@firebase/auth';

definePageMeta({
    layout: "login",
});

const { isLogin, setIsLogin } = useLogin()

onMounted(() => {
    const { test } = useFirebase()
})

function signInWithGoogle() {

    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(result);
            setIsLogin(true)

            // ...
        }).catch((error) => {
            setIsLogin(false)
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

}

function signOutApp() {
    const auth = getAuth();
    signOut(auth).then(() => {
        setIsLogin(false)
        // Sign-out successful.
        console.log('logout from firebase successful');
        
    }).catch((error) => {
        // An error happened.
    });
}

// console.log(firebase);

</script>

<template>
    <div>
        <h1 class="nes-text is-error">
            firebase google login
        </h1>
        <div v-if="isLogin">
            <button @click="signOutApp" type="button" class="nes-btn is-error"><i class="nes-icon google"></i>
                Sign-out</button>
        </div>
        <div v-else>
            <button @click="signInWithGoogle" type="button" class="nes-btn is-primary"><i class="nes-icon google"></i>
                Google Sign in</button>
        </div>
        <div style="margin-top: 1rem">
            <NuxtLink to="/">
                back
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
</style>
