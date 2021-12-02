const homeContainer = document.querySelector('.homeContainer');

adoptionRequest.on('value', (snapshot) => {
   renderRequest(snapshot);
});

const renderRequest = (snapshot) => {
   homeContainer.innerHTML = '';

   snapshot.forEach((data) => {
      let userRequests = data.val();

      let requests = Object.values(userRequests);

      requests.forEach((requestInfo) => {
         if (requestInfo.status == 'esperando') {
            petsRef
               .child(requestInfo.petId)
               .get()
               .then((snapshot) => {
                  let petInfo = snapshot.val();

                  let cardRequest = new CardRequest(requestInfo, petInfo);

                  homeContainer.appendChild(cardRequest.render());
               });
         } else {
            console.log('ya fue revisada');
         }
      });
   });
};
