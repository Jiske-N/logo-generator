const Square = require("./classSquare.js");

describe("square class", () => {
  it("should return the shape line of shape code with fill matching .setcolor()", () => {
    const shape = new Square();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      `<rect x="70" y="20" width="160" height="160" fill="yellow" />`
    );
  });
});
