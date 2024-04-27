const inquirer = require("inquirer");

const getData = async () => {
  try {
    // console.log(2, "a");
    const data = await inquirer.prompt([
      { type: "input", name: "chars", message: "Enter up to 3 characters" },
      { type: "input", name: "color", message: "Enter text color" },
      { type: "input", name: "bgColor", message: "Enter shape color" },
      {
        type: "list",
        name: "structure",
        message: "Select a shape",
        choices: ["Circle", "Square", "Triangle"],
      },
    ]);
    // console.log(2, "b", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getData();
