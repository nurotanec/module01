'use strict';

const calculate = (sum, amount, promocode) => {
    if (sum.isFinite() && amount.isInteger()) {
        let finalSum = sum;
        if (amount > 10) {
            finalSum -= (sum * 0.03);
        }

        if (finalSum > 30000) {
            finalSum -= ((finalSum - 30000) * 0.15);
        }

        if (promocode === 'METHED') {
            finalSum -= finalSum * 0.1;
        }

        if (promocode === 'G3H2Z1' && finalSum > 2000) {
            finalSum -= 500;
        }

        return finalSum;
    }
    return 0;
}
