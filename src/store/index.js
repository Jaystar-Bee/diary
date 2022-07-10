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
    },
    clearUser(state) {
      state.userId = null
      state.token = null

    },
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
          console.log(result)
          const userId = result.user.uid;
          const userToken = result.user.accessToken
          const expirationTime = result.user.stsTokenManager.expirationTime

          localStorage.setItem("userId", userId)
          localStorage.setItem("expires", expirationTime)
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
      let expireTime = localStorage.getItem('expires')
      expireTime = Number.parseInt(expireTime)


      const recentTime = new Date().getTime()
      if (recentTime > expireTime) {
        context.dispatch('logout')
      }

      context.commit("setUser", { userId, userToken })
    },
    logout(context) {
      localStorage.removeItem('userId')
      localStorage.removeItem('expires')
      localStorage.removeItem('userToken')
      context.commit('clearUser')
      router.replace('/')
    },
  },
  modules: {
    data: dataModule
  }
})
