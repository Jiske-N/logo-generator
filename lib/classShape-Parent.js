// parent class for other shapes
class Shape {
  constructor(chars, color, bgColor) {
    this.chars = chars;
    this.color = color;
    this.bgColor = bgColor;
  }

  // set color isn't actually needed for the present generation of logos
  // it is required to get the tests to pass following the exact input shown in the project description
  // could also be used in future development to add more colour control flexibility
  setColor(input) {
    this.bgColor = input;
    // return this.bgColor;
  }

  // this will be overwritten by child classes with content
  render() {}
}

module.exports = Shape;
