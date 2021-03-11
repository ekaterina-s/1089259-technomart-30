const buyButtons = document.querySelectorAll(`.catalog-detail .buy`);
const inBasketModal = document.querySelector(`.modal-in-basket`);
const basket = document.querySelector(`.basket-link`);
const modalClose = inBasketModal.querySelector(`.modal-close`);

buyButtons.forEach(buyButton => {
  buyButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    inBasketModal.classList.add(`modal-show`);
    basket.classList.add(`added`);
  });
});

modalClose.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  inBasketModal.classList.remove(`modal-show`);
  basket.classList.remove(`added`);
})

document.addEventListener(`keydown`, (evt) => {
  evt.preventDefault();
  if (evt.key === `Escape`) {
    if (inBasketModal.classList.contains(`modal-show`)) {
      evt.preventDefault();
      inBasketModal.classList.remove(`modal-show`);
    }
    if (basket.classList.contains(`added`)) {
      evt.preventDefault();
      basket.classList.remove(`added`);
    }
  }
})
