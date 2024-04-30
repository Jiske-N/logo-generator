const Triangle = require("./classTriangle.js");

describe("circle class", () => {
  it("should return the shape line of shape code with fill matching .setcolor()", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});
