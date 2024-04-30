const Circle = require("./classCircle.js");

describe("circle class", () => {
  it("should return the shape line of shape code with fill matching .setcolor()", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="red" />'
    );
  });
});
