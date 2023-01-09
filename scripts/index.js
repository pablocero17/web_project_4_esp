//Popup wrappers
const editProfilePopup = document.querySelector(".popup_type_edit-profile");
const addCardPopup = document.querySelector(".popup_type_add-card");
const imagePopup = document.querySelector(".popup_type_image");

//Open Buttons
const editProfileButton = document.querySelector(".profile__edit");
const addCardButton = document.querySelector(".profile__add");

//Close Buttons
const closeEditProfileButton = editProfilePopup.querySelector(".popup__close");
const closeAddCardButton = addCardPopup.querySelector(".popup__close");
const closeImageButton = imagePopup.querySelector(".popup__close");

//Forms
const form = document.querySelector('.form__profile-edit');

//Profile elements
const profileName = document.querySelector(".profile__name-text");
const profileDescription = document.querySelector(".profile__description");

//Form inputs
const nameInput = document.querySelector(".form__input_type_name");
const descriptionInput = document.querySelector(".form__input form__input_type_card-title");

//Places photo cards
const cardTemplate = document.querySelector(".photo-card-template").content.querySelector(".photo-card");
const list = document.querySelector(".photo-cards__group");

//Initial cards
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

function togglePopup(modal) {
  modal.classList.toggle("popup_opened");
}

function profileSubmit(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  togglePopup(editProfilePopup);
}

form.addEventListener("submit", profileSubmit);
editProfileButton.addEventListener("click", () => {
  if (editProfilePopup.classList.contains('popup_opened')) {
    nameInput.value =  profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  }
  togglePopup(editProfilePopup);
});

closeEditProfileButton.addEventListener("click", () => {
  togglePopup(editProfilePopup);
});

addCardButton.addEventListener("click", () => {
  togglePopup(addCardPopup);
});

closeAddCardButton.addEventListener("click", () => {
  togglePopup(addCardPopup);
});

initialCards.forEach(data => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".photo-card__image");
  const cardLikeButton = cardElement.querySelector(".photo-card__heart");
  const cardDeleteButton = cardElement.querySelector(".photo-card__delete-button");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardLikeButton.addEventListener("click", () => {

  });

  cardDeleteButton.addEventListener("click", () => {

  });

  cardImage.addEventListener("click", () => {

  });
  togglePopup(imagePopup)

  list.prepend(cardElement);
});

closeImageButton.addEventListener('click', () => {
  togglePopup(imagePopup);
});



