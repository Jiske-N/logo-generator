// const SVGLogos = require("./lib/logo.js");

// console.log(1, 2, 3);

// const logo = new SVGLogos();

// logo.main();

// const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const getData = require("./lib/getData.js");
// const generateShape = require("./lib/generateSVG.js");
const Circle = require("./lib/circle.js");
const Square = require("./lib/square.js");
const Triangle = require("./lib/triangle.js");

// class SVGLogos {
//   constructor() {
//     this.shape = "";
//   }
// }
// function generateShape(chars, color, bgColor, structure) {
//   switch (structure) {
//     case "Circle":
//       console.log("all the things", chars, color, bgColor);
//       const newShape = new Circle(chars, color, bgColor);
//       // console.log("x", "y", "z", newShape);
//       return newShape;
//     case "Square":
//       console.log(2);
//       break;
//     case "Triangle":
//       console.log(3);
//       break;

//     default:
//       break;
//   }
// }

const generateShape = (chars, color, bgColor, structure) => {
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

const main = async () => {
  try {
    const { chars, color, bgColor, structure } = await getData;

    // console.log("a", "b", chars, color, bgColor, structure);
    const shape = await generateShape(chars, color, bgColor, structure);
    // console.log("finally?", shape);

    const fileContents = await shape.render();
    // console.log(typeof fileContents);

    await writeFile("./examples/logo.svg", fileContents);
    console.log("Generated logo.svg");
  } catch (error) {
    console.log(error);
  }
};

main();

// prompts

// chars - up to 3

// text color - hexa key or word

// shape - list circle, triangle, square

// shape color - hexa key or word

// create "logo.svg"

// output "Generated logo.svg" to terminal

// image is 300x 200 when opened in browser

// the following should pass a test const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual(
//   '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
// );

// index calls main

// main runs everything in order:
// calls get data
// uses data to generate shape
// generate shape runs if to select structure and thens runs relevant class constructor
// then call render on generated shape

// const generateShape = (chars, color, bgColor, structure) => {
//   switch (structure) {
//     case "Circle":
//       console.log("all the things", chars, color, bgColor);
//       const newShape = new Circle(chars, color, bgColor);
//       console.log("x", "y", "z", newShape);
//       return newShape;
//     case "Square":
//       console.log(2);
//       break;
//     case "Triangle":
//       console.log(3);
//       break;

//     default:
//       break;
//   }
// };
