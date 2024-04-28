const Circle = require("./lib/circle.js");

const generateShape = (chars, color, bgColor, structure) => {
  switch (structure) {
    case "Circle":
      console.log("all the things", chars, color, bgColor);
      const newShape = new Circle(chars, color, bgColor);
      // console.log("x", "y", "z", newShape);
      return newShape;
    case "Square":
      console.log(2);
      break;
    case "Triangle":
      console.log(3);
      break;

    default:
      break;
  }
};

module.exports = generateShape;
