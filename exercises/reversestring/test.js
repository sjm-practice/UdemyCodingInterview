const reverse = require("./index");

describe("ReverseString", () => {
  test("Reverse function exists", () => {
    expect(reverse).toBeDefined();
  });

  test("Reverse reverses a string", () => {
    expect(reverse("abcd")).toEqual("dcba");
  });

  test("Reverse reverses a string, spaced padded left", () => {
    expect(reverse("  abcd")).toEqual("dcba  ");
  });
});
