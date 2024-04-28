const Shape = require("./shape");

// builds on shape by giving it a structure and method to return it.
class Square extends Shape {
  constructor(chars, color, bgColor) {
    super(chars, color, bgColor);

    // new structure specific to shape
    // will be called by render() inherited from parent
    this.structure = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

<rect x="70" y="20" width="160" height="160" fill="${this.bgColor}" />
  "/>

 <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.color}">${this.chars}</text>

</svg>
`;
  }
}

module.exports = Square;
