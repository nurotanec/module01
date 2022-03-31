'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  get width() {
    return this._width;
  },
  set width(value) {
    if (typeof value == 'number') {
      this._width = value;
    }
  },

  get height() {
    return this._height;
  },
  set height(value) {
    if (typeof value == 'number') {
      this._height = value;
    }
  },

  get perimeter() {
    return 2 * (this.width + this.height) + 'см';
  },

  get area() {
    return this.width * this.height + 'см2';
  },

};

console.log(rectangle);
rectangle.width = 10;
console.log(rectangle);
rectangle.height = 10;
console.log(rectangle);
console.log(rectangle.area);
console.log(rectangle.perimeter);

