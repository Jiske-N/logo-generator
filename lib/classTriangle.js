const Shape = require("./classShape-Parent");

// builds on shape by giving it a structure and method to return it.
class Triangle extends Shape {
  constructor(chars, color, bgColor) {
    super(chars, color, bgColor);
  }

  // new structure specific to shape replacing render method on parent
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.bgColor}" />`;
  }
}

module.exports = Triangle;
