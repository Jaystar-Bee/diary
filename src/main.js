import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { initializeApp } from "firebase/app";
import router from './router'
import './style/app.css'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import LoaderBlink from './components/common/LoaderBlink.vue'
import MessageNotification from './components/common/MessageNotification.vue'
import SuccessShow from './components/common/SuccessShow'

const app = createApp(App)

app.component("loader-blink", LoaderBlink)
app.component("message-notification", MessageNotification)
app.component("success-show", SuccessShow)

const firebaseConfig = {
    apiKey: "AIzaSyAzrXyKYV1s_UmSEX86JU_x2DxB6o9xtW4",
    authDomain: "diary-a00aa.firebaseapp.com",
    databaseURL: "https://diary-a00aa-default-rtdb.firebaseio.com",
    projectId: "diary-a00aa",
    storageBucket: "diary-a00aa.appspot.com",
    messagingSenderId: "27011852587",
    appId: "1:27011852587:web:15fa1d9ef5218e41cebd6e",
    measurementId: "G-K8P7K7JHWB"
};
initializeApp(firebaseConfig)
app.use(store).use(router).use(VueAxios, axios).mount('#app')
