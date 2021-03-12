const buyButtons = document.querySelectorAll(`.catalog-detail .buy`);
const inBasketModal = document.querySelector(`.modal-in-basket`);
const basket = document.querySelector(`.basket-link`);
const popUpClose = inBasketModal.querySelector(`.modal-close`);

buyButtons.forEach(buyButton => {
  buyButton.addEventListener(`click`, (evt) => {
    inBasketModal.classList.add(`modal-show`);
    basket.classList.add(`added`);
  });
});

popUpClose.addEventListener(`click`, (evt) => {
  inBasketModal.classList.remove(`modal-show`);
  basket.classList.remove(`added`);
});

document.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Escape`) {
    if (inBasketModal.classList.contains(`modal-show`)) {
      inBasketModal.classList.remove(`modal-show`);
    }
    if (basket.classList.contains(`added`)) {
      basket.classList.remove(`added`);
    }
  }
})
