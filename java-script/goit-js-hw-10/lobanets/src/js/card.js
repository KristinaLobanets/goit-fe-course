export const cart = { order: [], totalSumm: 0, totalQuantity: 0 };

export const addToCard = dish => {
  const result = cart.order.find(item => item.id === dish.id);
  if (!result) {
    cart.order = [
      ...cart.order,
      { id: dish.id, name: dish.name, price: dish.price, quantity: 1 },
    ];
  } else {
    cart.order = cart.order.map(item => {
      if (item.id === dish.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
  }

  getTotal();
};

export const getTotal = () => {
  cart.totalSumm = cart.order.reduce((acc, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0);
  cart.totalQuantity = cart.order.reduce((acc, item) => {
    acc += item.quantity;
    return acc;
  }, 0);
};

export const removeFromCard = id => {
  cart.order = cart.order.filter(item => id !== item.id);
};
