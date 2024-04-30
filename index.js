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
