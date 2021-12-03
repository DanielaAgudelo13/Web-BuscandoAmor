const form = document.querySelector('.authForm');

const validateForm = (email, password) => {
   if (email == '') {
      alert('Por favor escribe el correo');
      return false;
   }

   if (password == '') {
      alert('por favor escribe una contraseña');
      return false;
   }

   if (!email.startsWith('admin')) {
      alert('no tienes permisos de administrador');
      return false;
   }

   return true;
};

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const email = form.email.value;
   const password = form.password.value;

   if (validateForm(email, password)) {
      auth
         .signInWithEmailAndPassword(email, password)
         .then(() => {
            window.location.href = './home.html';
         })
         .cath((error) => {
            console.log(error);
         });
   }
});

auth.onAuthStateChanged((user) => {
   console.log(user);
   if (user != null) {
      window.location.href = './home.html';
   }
});
