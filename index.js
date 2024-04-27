// const SVGLogos = require("./lib/logo.js");

// console.log(1, 2, 3);

// const logo = new SVGLogos();

// logo.main();

// const inquirer = require("inquirer");
const getData = require("./lib/getData.js");
const Circle = require("./lib/circle.js");

// class SVGLogos {
//   constructor() {
//     this.shape = "";
//   }
// }

const main = async () => {
  try {
    const { chars, color, bgColor, structure } = await getData;
    // console.log(1, "b");
    console.log(chars, color, bgColor, structure);
    // const generateShape = new generateShape(chars, color, bgColor, structure);
    const shape = (chars, color, bgColor, structure) => {
      switch (structure) {
        case "Circle":
          // console.log(chars, color, bgColor);
          const newShape = new Circle(chars, color, bgColor);
          console.log(newShape);
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
    // await generateShape().render();
    console.log("i hope the shape works");
    shape.render();
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
