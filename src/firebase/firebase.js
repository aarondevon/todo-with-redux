import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3uzbFvgeFn2AI0dX9B9b66dtC3Zbxp8w",
  authDomain: "todo-29278.firebaseapp.com",
  databaseURL: "https://todo-29278.firebaseio.com",
  projectId: "todo-29278",
  storageBucket: "todo-29278.appspot.com",
  messagingSenderId: "859533664618",
  appId: "1:859533664618:web:dff06bfdba455944254513"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('todos').push({
  category: 'general'
})

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
//   const { name } = snapshot.val();
//   const { title, company } = snapshot.val().job;
//   console.log(`${name} is a ${title} at ${company}`)
// })
//
// setTimeout(() => {
//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//   })
// }, 3500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//     })
//     .catch((error) => {
//       console.log('Error fetching data', error)
//     });



