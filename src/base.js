import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1QNGQ0r30redHbRXniFqUIG8UfbKt3N8",
  authDomain: "recipe-app-ac183.firebaseapp.com",
  databaseURL: "https://recipe-app-ac183.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
