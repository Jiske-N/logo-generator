const inquirer = require("inquirer");

const getData = async () => {
  try {
    const data = await inquirer.prompt([
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
        message: "Enter text color - Note this can be name or hexcode",
      },
      {
        type: "list",
        name: "structure",
        message: "Select a shape",
        choices: ["Circle", "Square", "Triangle"],
      },
    ]);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getData;
