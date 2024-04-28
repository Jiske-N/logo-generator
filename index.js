const { writeFile } = require("fs/promises");
const getData = require("./lib/returnData.js");
const generateShape = require("./lib/returnSVG.js");

const main = async () => {
  try {
    const { chars, color, bgColor, structure } = await getData;

    const shape = await generateShape(chars, color, bgColor, structure);

    const fileContents = shape.render();

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
