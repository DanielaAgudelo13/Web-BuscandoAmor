class CardPet {
   constructor(petInfo) {
      this.pet = petInfo;
   }

   render() {
      let cardPet = document.createElement('div');
      cardPet.className = 'card cardPet';

      cardPet.innerHTML = `
         <div class="cardImgContainer ${this.pet.type == 'dog' ? 'cardImgContainerPurple' : ''}">
            <img class="cardImg" src="${this.pet.img}" alt="" />
         </div>

         <div class="cardContent">
            <div>
               <h1>${this.pet.name}</h1>
               <p><b>${this.pet.breed}</b></p>
            </div>

            <div>
               <p>${this.pet.age}</p>
               <p>${this.pet.characteristic}</p>
            </div>
         </div>

         <div class="cardPetLeft">
            <img class="cardPetLeftGender" src="${
               this.pet.sex === 'male' ? './images/iconos/male.svg' : './images/iconos/female.svg'
            }" alt="" />

            <button class="btn btnCardPet">
               <img src="./images/iconos/trashcan.svg" alt="" />
            </button>
         </div>
      `;

      const btnCardPet = cardPet.querySelector('.btnCardPet');

      btnCardPet.onclick = () => {
         db.ref('Pets/' + this.pet.id).remove();
      };

      return cardPet;
   }
}
