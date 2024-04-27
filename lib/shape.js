// create parent shape class

// include render method for all children.

// the following should pass a test

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual(
//   '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
// );

class Shape {
  constructor(chars, color, bgColor) {
    this.chars = chars;
    this.color = color;
    this.bgColor = bgColor;
  }

  render() {
    throw new Error("Stuff went wrong with render");
  }
}

module.exports = Shape;
