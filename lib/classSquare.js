const Shape = require("./classShape-Parent");

// builds on shape by giving it a structure and method to return it.
class Square extends Shape {
  constructor(chars, color, bgColor) {
    super(chars, color, bgColor);
  }

  // new structure specific to shape replacing render method on parent
  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.bgColor}" />`;
  }
}
module.exports = Square;
