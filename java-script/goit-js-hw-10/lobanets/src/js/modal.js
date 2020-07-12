import * as basicLightbox from 'basiclightbox';
import template from '../templates/cartTemplete.hbs';
import { cart, getTotal } from './card.js';
import 'basiclightbox/dist/basicLightbox.min.css';
import refs from '../js/refs.js';
import { removeFromCard } from './card.js';

export const cartModal = () => {
  const markup = template(cart.order);
  const instance = basicLightbox.create(
    `
    <div class="modal">
    <div class="modal__form-wrapper"><h2 class="modal__form-title">Cart</h2>
    ${
      cart.order.length > 0
        ? `<ul class="orderList">${markup}</ul>`
        : `<p>Cart is empty</p>`
    }
    <hr>
    <div class="cart-order-total">
    <span class ="allProducts"><b>All products in cart: </b>${
      cart.totalQuantity
    }</span>
    <span class = "summary"><b>Summary: </b>${cart.totalSumm}</span>
    </div>
    ${
      cart.order.length > 0
        ? "<button class='orderButton'>Confirm Order</button>"
        : ''
    }
    <button class="modalBtn">close</button>
    </div>
    </div>
    `,
    {
      onShow: instance => {
        instance.element().querySelector('.modalBtn').onclick = instance.close;
      },
    },
  );
  instance.show();
  const removeDish = event => {
    if (
      event.target.nodeName === 'BUTTON' &&
      event.target.classList.contains('remove')
    ) {
      removeFromCard(event.target.dataset.id);
      document.querySelector('.orderList').innerHTML = template(cart.order);
      getTotal();
      document.querySelector(
        '.summary',
      ).innerHTML = `<b>Summary: </b>${cart.totalSumm}`;
      document.querySelector(
        '.allProducts',
      ).innerHTML = `<b>All products in cart: </b>${cart.totalQuantity}`;
    }
  };

  document.querySelector('.orderList').addEventListener('click', removeDish);
};
