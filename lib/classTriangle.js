const Shape = require("./classShape-Parent");

// builds on shape by giving it a structure and method to return it.
class Triangle extends Shape {
  constructor(chars, color, bgColor) {
    super(chars, color, bgColor);

    // new structure specific to shape
    // will be called by render() inherited from parent
    this.structure = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

<polygon points="150 20, 50 180, 250 180" fill="${this.bgColor}" />

<text x="150" y="178" font-size="60" text-anchor="middle" fill="${this.color}">${this.chars}</text>

</svg>`;
  }
}

module.exports = Triangle;
