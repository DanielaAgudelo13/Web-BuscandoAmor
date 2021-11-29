const btnLanding = document.querySelector('.btnLanding');

if (btnLanding != null) {
   btnLanding.addEventListener('click', () => {
      location.href = 'login.html';
   });
}

const btnRegister = document.querySelector('.btnGoRegister');

if (btnRegister != null) {
   btnRegister.addEventListener('click', () => {
      location.href = 'registerPet.html';
   });
}
