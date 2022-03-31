'use strict';

const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,
  discount: 0,

  add(name, price, count = 1) {
    const newItem = {
      name: name,
      price: price,
      count: count,
    };

    this.items.push(newItem);
    this.increaseCount(count);
  },

  increaseCount(value) {
    this.count += value;
  },

  calculateItemPrice() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price * item.count;
    });
    return total * (1 - this.discount / 100);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log('Товары в корзине: ', JSON.stringify(this.items));
    console.log('Общая стоимость корзины: ', this.totalPrice);
  },

  set setDiscount(promocode) {
    switch (promocode) {
      case 'METHED':
        this.discount = 15;
        break;
      case 'NEWYEAR':
        this.discount = 21;
        break;
      default:
        this.discount = 0;
        break;
    }
  },
};

cart.add('iphone', 1000, 2);
cart.add('iphone', 1000, 2);
cart.add('iphone', 1000, 2);

cart.print();

cart.clear();
cart.print();
