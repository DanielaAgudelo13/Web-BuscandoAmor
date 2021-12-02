const adoptionsContainer = document.querySelector('.adoptionsContainer');

var today = new Date();

var todayM = moment();
const sevenDaysBefore = moment().subtract(7, 'days');

let filterValue = undefined;

const btnsFilter = document.querySelectorAll('.filterBtns');

btnsFilter.forEach((btn, i) => {
   btn.onclick = () => {
      btnsFilter.forEach((btn) => {
         btn.classList.remove('btnFilter');
         btn.classList.add('btnWhite');
      });

      switch (i) {
         case 0:
            filterValue = 'day';
            btn.classList.add('btnFilter');
            btn.classList.remove('btnWhite');
            break;

         case 1:
            filterValue = 'week';
            btn.classList.add('btnFilter');
            btn.classList.remove('btnWhite');
            break;

         case 2:
            filterValue = 'month';
            btn.classList.add('btnFilter');
            btn.classList.remove('btnWhite');
            break;
      }

      getAdoptionData();
   };
});

const getAdoptionData = () => {
   adoptionRequest.on('value', (snapshot) => {
      adoptionsContainer.innerHTML = '';

      snapshot.forEach((data) => {
         let adoptionUsers = data.val();

         let adoptions = Object.values(adoptionUsers);

         adoptions.forEach((adoptionInfo) => {
            if (adoptionInfo.status === 'aprobado') {
               petsRef
                  .child(adoptionInfo.petId)
                  .get()
                  .then((snapshot) => {
                     let petInfo = snapshot.val();

                     switch (filterValue) {
                        case undefined:
                           renderAdoptions(petInfo);
                           break;

                        case 'day':
                           if (
                              adoptionInfo.date.date === today.getDate() &&
                              adoptionInfo.date.month === today.getMonth()
                           ) {
                              renderAdoptions(petInfo);
                           }

                           break;

                        case 'week':
                           let dateApi = moment().set({
                              year: 2021,
                              month: adoptionInfo.date.month,
                              day: adoptionInfo.date.date,
                           });

                           console.log(dateApi.isBetween(sevenDaysBefore, today, 'day', '[]'));

                           if (dateApi.isBetween(sevenDaysBefore, today, 'day', '[]')) {
                              renderAdoptions(petInfo);
                           }

                           break;

                        case 'month':
                           if (adoptionInfo.date.month === today.getMonth()) {
                              renderAdoptions(petInfo);
                           }

                           break;
                     }
                  });
            }
         });
      });
   });
};

const renderAdoptions = (petInfo) => {
   const adoption = new CardAdoption(petInfo);

   adoptionsContainer.appendChild(adoption.render());
};

getAdoptionData();
