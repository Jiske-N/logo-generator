const { writeFile } = require("fs/promises");
const getData = require("./lib/returnData.js");
const sVG = require("./lib/returnSVG.js");

const main = async () => {
  try {
    // retreive data from prompts
    const { chars, color, bgColor, structure } = await getData();

    // trigger function to generate file contents
    const fileContents = await sVG(chars, color, bgColor, structure);

    // write contents to file
    await writeFile("./examples/logo.svg", fileContents);
    console.log("Generated logo.svg");
  } catch (error) {
    console.log(error);
  }
};

main();

// the way I completed the project is not the way I would actually go about it in terms of efficiency.
// apologies for the massive number of files linking to one another I was practicing tracking how data moves between files.
// a far more concise way to provide the same functionality (but not pass the tests) would be:

const inquirer = require("inquirer");
// also require access to fs from the top of the page.

// questions for prompts
data2 = [
  {
    type: "input",
    name: "chars",
    message: "Enter up to 3 characters - Note this is case sensitive",
  },
  {
    type: "input",
    name: "color",
    message: "Enter text color - Note this can be name or hexcode",
  },
  {
    type: "input",
    name: "bgColor",
    message: "Enter background color - Note this can be name or hexcode",
  },
  {
    type: "list",
    name: "structure",
    message: "Select a shape",
    choices: ["Circle", "Square", "Triangle"],
  },
];

inquirer
  .prompt(data2)
  .then((data2) => {
    // all components of data2
    const { chars, color, bgColor, structure } = data2;

    // return shape to match structure prompt
    const shape2 = (structure) => {
      switch (structure) {
        case "Circle":
          return `<circle cx="150" cy="100" r="80" fill="${bgColor}" />`;
        case "Square":
          return `<rect x="70" y="20" width="160" height="160" fill="${bgColor}" />`;
        case "Triangle":
          return `<polygon points="150, 18 244, 182 56, 182" fill="${bgColor}" />`;

        default:
          break;
      }
    };

    // contents of svg file
    const contents2 = `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

  ${shape2(structure)}

  <text x="150" y="115" font-size="60" text-anchor="middle" fill="${color}">${chars}</text>

  </svg>`;

    // write svg file with contents from above
    writeFile("./examples/logo2.svg", contents2);
  })
  .then(() => {
    console.log("Generated logo.svg - Example 2");
  });
