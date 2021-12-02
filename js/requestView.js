const params = new URLSearchParams(location.search);
const requestId = params.get('requestId');
const userName = params.get('userName');

let userId;

usersRef.on('value', (snapshot) => {
   snapshot.forEach((data) => {
      let name = data.val().name;

      if (userName === name) {
         userId = data.val().id;

         adoptionRequest
            .child(userId)
            .child(requestId)
            .get()
            .then((snapshot) => {
               let request = snapshot.val();

               petsRef
                  .child(request.petId)
                  .get()
                  .then((snapshot) => {
                     let pet = snapshot.val();
                     renderRequestView(request, pet);
                  });
            });
      }
   });
});

const requestView = document.querySelector('.requestView');

const renderRequestView = (request, pet) => {
   console.log(pet);

   requestView.querySelector('.requestViewImg').src = pet.img;

   requestView.querySelector('.requestViewName').innerHTML = request.name;
   requestView.querySelector('.requestViewEmail').innerHTML = request.email;
   requestView.querySelector('.requestViewAddress').innerHTML = request.address;
   requestView.querySelector('.requestViewReason').innerHTML = request.reason;
};

document.querySelector('.btnRequestAccept').onclick = () => {
   db.ref('AdoptionRequest/' + userId + '/' + requestId + '/status').set('aprobado ');
   window.location.href = './home.html';
};

document.querySelector('.btnRequestRefuse').onclick = () => {
   db.ref('AdoptionRequest/' + userId + '/' + requestId + '/status').set('rechazado');
   window.location.href = './home.html';
};
