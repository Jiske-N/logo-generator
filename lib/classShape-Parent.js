// create parent shape class

// include render method for all children.

// the following should pass a test

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual(
//   '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
// );

// // parent class for other shapes
// class Shape {
//   constructor(chars, color, bgColor) {
//     this.chars = chars;
//     this.color = color;
//     this.bgColor = bgColor;
//   }

//   // this won't de anything unless the child shape is given a structure.
//   // may be better to place directly on the children
//   render() {
//     return this.structure;
//   }
// }

// module.exports = Shape;

// parent class for other shapes
class Shape {
  constructor(chars, color, bgColor) {
    this.chars = chars;
    this.color = color;
    this.bgColor = bgColor;
  }

  setColor(input) {
    this.color = input;
    return this.color;
  }

  // this won't de anything unless the child shape is given a structure.
  // may be better to place directly on the children
  render() {}
}

module.exports = Shape;
