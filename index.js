const SVGLogos = require("./lib/logo");

const logo = new SVGLogos();

logo.run();

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
