import { formatOptions } from "./formatOptions";

describe("formatOptions", () => {
  it("should return all lowercase for the first option", () => {
    expect(
      formatOptions[0].method("The Quick Brown Fox Jumped Over The Lazy Dog")
    ).toEqual("the quick brown fox jumped over the lazy dog");
  });

  it("should return all uppercase for the second option", () => {
    expect(
      formatOptions[1].method("The Quick Brown Fox Jumped Over The Lazy Dog")
    ).toEqual("THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG");
  });
});
