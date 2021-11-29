const formPet = document.querySelector('.formPetContent');
const uploadImage = document.querySelector('.formUploadPhoto');
const imgInput = document.querySelector('.formPetPhotoContainer');
const btnCat = document.querySelector('.btnCat');
const btnDog = document.querySelector('.btnDog');

let type;
let imgUrl;

btnCat.onclick = () => {
   type = 'cat';

   btnCat.querySelector('img').src = '../images/iconos/catWhite.svg';
   btnDog.querySelector('img').src = '../images/iconos/dog.svg';

   btnCat.classList.remove('btnWhite');
   btnDog.classList.add('btnWhite');
};

btnDog.onclick = () => {
   type = 'dog';

   btnDog.querySelector('img').src = '../images/iconos/dogWhite.svg';
   btnCat.querySelector('img').src = '../images/iconos/cat.svg';

   btnDog.classList.remove('btnWhite');
   btnCat.classList.add('btnWhite');
};

imgInput.addEventListener('click', () => {
   uploadImage.classList.remove('hidden');
   imgInput.classList.add('hidden');
});

uploadImage.addEventListener('submit', (e) => {
   e.preventDefault();
   imgUrl = uploadImage.url.value;
   uploadImage.classList.add('hidden');

   if (imgUrl !== '') {
      imgInput.innerHTML = `
      <img class="formPetPhoto" src="${imgUrl}" alt="" />
   `;
   }

   imgInput.classList.remove('hidden');
});

const validatePetData = (dog) => {
   if (dog.img == undefined || dog.img == '') {
      alert('Please add a image');
      return false;
   }

   if (dog.name == '') {
      alert('Please add a name');
      return false;
   }

   if (dog.type == undefined || dog.type == '') {
      alert('Please select a type');
      return false;
   }

   if (dog.breed == '') {
      alert('Please add a breed');
      return false;
   }

   if (dog.characteristic == '') {
      alert('Please add one characteristic');
      return false;
   }

   if (dog.age == '') {
      alert('Please add a age');
      return false;
   }

   if (dog.color == '') {
      alert('Please add a color');
      return false;
   }

   if (dog.sex == '') {
      alert('Please select the sex');
      return false;
   }

   if (dog.description == '') {
      alert('Please add a description');
      return false;
   }

   return true;
};

const uploadPet = (pet) => {
   let reference = petsRef.push();

   pet = {...pet, id: reference.key};

   reference.set(pet);
};

const resetImgInput = () => {
   imgInput.innerHTML = `
      <img src="./images/iconos/plus.svg" alt="" />
      <p class="white">Añade una imagen</p>
   `;
};

formPet.addEventListener('submit', (e) => {
   e.preventDefault();

   const pet = {
      name: formPet.name.value,
      type: type,
      breed: formPet.breed.value,
      characteristic: formPet.charaterics.value,
      age: formPet.age.value,
      color: formPet.color.value,
      sex: formPet.sex.value,
      description: formPet.description.value,
      img: imgUrl,
   };

   if (validatePetData(pet)) {
      uploadPet(pet);

      formPet.name.value = '';
      type = '';
      formPet.breed.value = '';
      formPet.charaterics.value = '';
      formPet.age.value = '';
      formPet.color.value = '';
      formPet.sex.value = '';
      formPet.description.value = '';
      imgUrl = '';

      resetImgInput();
   }
});
