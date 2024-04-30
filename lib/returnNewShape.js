const Circle = require("./classCircle.js");
const Square = require("./classSquare.js");
const Triangle = require("./classTriangle.js");

const newShape = (chars, color, bgColor, structure) => {
  switch (structure) {
    case "Circle":
      const newCircle = new Circle(chars, color, bgColor);
      return newCircle;
    case "Square":
      const newSquare = new Square(chars, color, bgColor);
      return newSquare;
    case "Triangle":
      const newTriangle = new Triangle(chars, color, bgColor);
      return newTriangle;

    default:
      break;
  }
};

module.exports = newShape;
