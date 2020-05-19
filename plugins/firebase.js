
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length)
{
  const config = {
    apiKey: "AIzaSyAsA-BoCr7OBg2k3VQsB0BimA-2SErv7Z0",
    authDomain: "slack-clone-app-9a167.firebaseapp.com",
    databaseURL: "https://slack-clone-app-9a167.firebaseio.com",
    projectId: "slack-clone-app-9a167",
    storageBucket: "slack-clone-app-9a167.appspot.com",
    messagingSenderId: "507807311455",
    appId: "1:507807311455:web:96f379d936ce0f8b04ddea",
    measurementId: "G-C44ZKTQSHC"
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()
export
{
  firebase,
  db
}
