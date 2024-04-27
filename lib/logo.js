const inquirer = require("inquirer");

// class SVGLogos {
//   constructor() {
//     this.shape = "";
//   }
// }

const main = async () => {
  try {
    console.log("a");
    const data = await getData(chars, color, bgColor, structure);
    const generateShape = new generateShape(chars, color, bgColor, structure);

    await generateShape().render();
    // write to file
    console.log("Generated logo.svg");
  } catch (error) {
    console.log(error);
  }
};

main();
