const petListContainer = document.querySelector('.petListContainer');

petsRef.on('value', (snapshot) => {
   renderPets(snapshot);
});

const renderPets = (snapshot) => {
   petListContainer.innerHTML = '';

   snapshot.forEach((data) => {
      let petInfo = data.val();

      let cardPet = new CardPet(petInfo);

      petListContainer.appendChild(cardPet.render());

      console.log(petInfo);
   });
};

const btnGoRegister = document.querySelector('.btnGoRegister');

btnGoRegister.onclick = () => {
   window.location.href = './registerPet.html';
};
