const firebaseConfig = {
   apiKey: "AIzaSyBMM0rbmnwI0TqkqgZUAT28H0LFG1A-7No",
   authDomain: "buscandoamor-15a6c.firebaseapp.com",
   databaseURL: "https://buscandoamor-15a6c-default-rtdb.firebaseio.com",
   projectId: "buscandoamor-15a6c",
   storageBucket: "buscandoamor-15a6c.appspot.com",
   messagingSenderId: "59226766385",
   appId: "1:59226766385:web:6c80175ef94b491d272910"

};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();
const user = firebase.auth().currentUser;

//reference
const usersRef = db.ref('Users');
const petsRef = db.ref('Pets');
const adoptionRequest = db.ref('AdoptionRequest');

const btnLogout = document.querySelector('.btnLogout');

btnLogout.addEventListener('click', () => {
   console.log('salio');
   auth.signOut().then(() => {
      window.location.href = 'index.html';
   });
});
