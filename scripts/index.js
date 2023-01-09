//Popups
const form = document.querySelector(".form__profile-edit");
const editProfilePopup = document.querySelector(".popup__type_edit-profile");
const addCardPopup = document.querySelector(".popup__type_add-card");

//Buttons
const editProfileButton = document.querySelector(".profile__edit");
const closeEditProfileButton = editProfilePopup.querySelector(".popup__close");

const addCardButton = document.querySelector(".profile__add");
const closeAddCardButton = addCardPopup.querySelector(".popup__close");

//Profile
const profileName = document.querySelector(".profile__name-text");
const profileDescription = document.querySelector(".profile__description");

//Form inputs
const nameInput = document.querySelector(".form__input_type_name");
const descriptionInput = document.querySelector(".form__input form__input_type_card-title");

function togglePopup(modal) {
  modal.classList.toggle("popup_opened");
}

function profileSubmit(e) {
  e.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  togglePopup(editProfilePopup);
}

form.addEventListener('submit', profileSubmit);
editProfileButton.addEventListener('click', () => {
  if (editProfilePopup.classList.contains('popup_opened')) {
    nameInput.value =  profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  }
  togglePopup(editProfilePopup);
});

addCardButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
});

closeAddCardButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
});

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];
