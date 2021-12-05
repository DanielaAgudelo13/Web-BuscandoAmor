const firebaseConfig = {
   apiKey: "AIzaSyBQxrfmK7modt2IKugys4AnF_pM8KpI3pw",
   authDomain: "buscando-amor-15a00.firebaseapp.com",
   databaseURL: "https://buscando-amor-15a00-default-rtdb.firebaseio.com",
   projectId: "buscando-amor-15a00",
   storageBucket: "buscando-amor-15a00.appspot.com",
   messagingSenderId: "1091939386420",
   appId: "1:1091939386420:web:287e6f152ab22f919df661",
 
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
