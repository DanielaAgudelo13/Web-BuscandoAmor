class CardAdoption {
   constructor(petInfo) {
      this.pet = petInfo;
   }

   render() {
      const cardAdoption = document.createElement('div');

      cardAdoption.className = 'card cardAccepted';

      cardAdoption.innerHTML = `
         <div class="cardImgContainer">
            <img class="cardImg" src="${this.pet.img}" alt="" />
         </div>

         <div class="cardContent">
            <div>
               <h1>${this.pet.name}</h1>
               <p><b>${this.pet.breed}</b></p>
            </div>

            <div>
               <p>${this.pet.age} años</p>
               <p>${this.pet.characteristic}</p>
            </div>
         </div>

         <div class="cardAcceptedLeft">
             <img class="cardAcceptedLeftGender" src="${
                this.pet.sex == 'male' ? './images/iconos/male.svg' : './images/iconos/female.svg'
             }" alt="" />
         </div>
      `;

      return cardAdoption;
   }
}
