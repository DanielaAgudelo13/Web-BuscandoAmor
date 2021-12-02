class CardRequest {
   constructor(requestInfo, petInfo) {
      this.request = requestInfo;
      this.pet = petInfo;
   }

   render() {
      let cardRequest = document.createElement('div');
      cardRequest.className = 'card cardRequest clickable';

      console.log(this.request.date);

      cardRequest.innerHTML = `
         <div class="cardImgContainer">
            <img class="cardImg" src="${this.pet.img}" alt="" />
         </div>

         <div class="cardContent">
            <div>
               <h1>${this.request.name}</h1>
               <p><b>${this.pet.name}, ${this.pet.breed}</b></p>
            </div>

            <div>
               <p><b>Solicitada la adopción:</b>${
                  this.request.date.day + '/' + this.request.date.month + '/' + this.request.date.year
               }</p>
               <p><b>Estado:</b> En proceso...</p>
            </div>
         </div>
      `;

      cardRequest.onclick = () => {
         window.location.href = `./requestView.html?id=${this.request.id}&=${this.request.name}&=${this.pet.name}`;
      };

      return cardRequest;
   }
}
