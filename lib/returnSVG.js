const newShape = require("./returnNewShape");

// return svg file contents/code
const sVG = async (chars, color, bgColor, structure) => {
  try {
    const shape = await newShape(chars, color, bgColor, structure);

    const contents = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

${shape.render()}

<text x="150" y="115" font-size="60" text-anchor="middle" fill="${
      shape.color
    }">${shape.chars}</text>

</svg>`;

    return contents;
  } catch (error) {
    console.log(error);
  }
};

module.exports = sVG;
