const mapLink = document.querySelector(`.map`);
const mapPopup = document.querySelector(`.modal-map`);
const mapClose = mapPopup.querySelector(`.modal-close`);


mapLink.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  mapPopup.classList.add(`modal-show`);
});

mapClose.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  mapPopup.classList.remove(`modal-show`);
});

window.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Escape`) {
    if (mapPopup.classList.contains(`modal-show`)) {
      evt.preventDefault();
      mapPopup.classList.remove(`modal-show`);
    }
  }
});

