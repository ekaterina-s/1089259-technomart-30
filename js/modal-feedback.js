const buttonFeedback = document.querySelector(`.button-feedback`);
const modalFeedback = document.querySelector(`.modal-feedback`);
const modalClose = modalFeedback.querySelector(`.modal-close`);
const feedbackForm = document.querySelector(`.feedback-form`);
const nameUser = modalFeedback.querySelector(`.name-user`);
const emailUser = modalFeedback.querySelector(`.email-user`);
const textboxUser = modalFeedback.querySelector(`.textbox-user`);

let isStorageSupport = true;
let storage = ``;

try {
  storage = localStorage.getItem(`name`);
} catch (err) {
  isStorageSupport = false;
}

buttonFeedback.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modalFeedback.classList.add(`modal-show`);
  if (storage) {
    nameUser.value = storage;
    emailUser.value = storage;
  };
});

modalClose.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modalFeedback.classList.remove(`modal-show`);
  modalFeedback.classList.remove(`modal-error`);
});

window.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Escape`) {
    if (modalFeedback.classList.contains(`modal-show`)) {
      evt.preventDefault();
      modalFeedback.classList.remove(`modal-show`);
      modalFeedback.classList.remove(`modal-error`);
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", nameUser.value);
        localStorage.setItem("email", emailUser.value);
      }
    }
  }
});

feedbackForm.addEventListener(`submit`, (evt) => {
  if (!nameUser.value || !emailUser.value || !textboxUser.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add(`modal-error`);
  }
});
