import firebase from 'firebase/app' // firebase 全般の機能を利用するために必要
import 'firebase/auth' // ログイン機能を使うために読み込み
import 'firebase/firestore' // データベース機能を使うために読み込み

if (!firebase.apps.length) {
 const config = {
   apiKey: "AIzaSyCzkuJjWmbr_pGYtU6wD65U_xQVRie-NI8",
   authDomain: "slack-clone-app-86e5c.firebaseapp.com",
   databaseURL: "https://slack-clone-app-86e5c.firebaseio.com",
   projectId: "slack-clone-app-86e5c",
   storageBucket: "slack-clone-app-86e5c.appspot.com",
   messagingSenderId: "801490717597",
 }
 firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}
