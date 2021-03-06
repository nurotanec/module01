'use strict';

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice() {
        return this.totalPrice;
    },

    add(name, price, count = 1) {
        const newItem = {
            name: name,
            price: price,
            count: count
        }

        this.items.push(newItem);
        this.calculateItemPrice();
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
        this.totalPrice = total;
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