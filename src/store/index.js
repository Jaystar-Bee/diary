import { createStore } from 'vuex'
import dataModule from './modules/data/index.js'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import router from './../router'

export default createStore({
  state: {
    userId: null,
    token: null,
  },
  getters: {
    userId(state) {
      return state.userId
    },
    token(state) {
      return state.token
    },
    isAuthenticated(state) {
      return !!state.token
    }
  },
  mutations: {
    setUser(state, payloads) {
      state.userId = payloads.userId
      state.token = payloads.userToken
    }
  },
  actions: {
    async signIn(context) {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const googleToken = credential.accessToken;
          console.log(googleToken)
          // The signed-in user info.
          const userId = result.user.uid;
          const userToken = result.user.accessToken
          localStorage.setItem("userId", userId)
          localStorage.setItem("userToken", userToken)

          context.commit("setUser", { userId, userToken })
          router.replace("/main");
          // ...
        }).catch((error) => {
          console.log(error)
          throw new Error(error.message || "Please check your internet connection!")
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // // The email of the user's account used.
          // const email = error.customData.email;
          // // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
    autoLogin(context) {
      const userId = localStorage.getItem("userId")
      const userToken = localStorage.getItem("userToken")

      context.commit("setUser", { userId, userToken })
    }
  },
  modules: {
    data: dataModule
  }
})
