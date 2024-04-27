const Shape = require("./shape");

// extend shape.js
class Circle extends Shape {
  constructor(chars, color, bgColor) {
    super(chars, color, bgColor);
    console.log(chars, color, bgColor);
    this.svg = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <circle cx="150" cy="100" r="80" fill="${this.bgColor}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.chars}</text>
   
   </svg>`;
  }
}

module.exports = Circle;
