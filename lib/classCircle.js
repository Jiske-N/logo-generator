const Shape = require("./classShape-Parent");

// builds on shape by giving it a structure and method to return it.
class Circle extends Shape {
  constructor(chars, color, bgColor) {
    super(chars, color, bgColor);
  }

  // new structure specific to shape replacing render method on parent
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.bgColor}" />`;
  }
}

module.exports = Circle;
