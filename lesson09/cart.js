'use strict';

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice() {
        return this.totalPrice;
    },

    add(item, price, count = 1) {
        this.items.push(item);
        this.calculateItemPrice(price);
        this.increaseCount(count);
    },

    increaseCount(value) {
        this.count += value;
    },

    calculateItemPrice(price) {
        this.totalPrice += price;
    },

    clear() {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },

    print() {
        console.log('Товары в корзине: ', JSON.stringify(this.items));
        console.log('Общая стоимость корзины: ', this.getTotalPrice());
    },
}

cart.add('iphone', 1000, 2);
cart.add('iphone', 1000, 2);
cart.add('iphone', 1000, 2);

cart.print();

cart.clear();
cart.print();