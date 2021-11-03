const getAvatarHandler = require("./get-avatar-handler.js");

const arr = [
  { picture: "one.jpeg", isPrincipal: true },
  { picture: "two.png", isPrincipal: false },
];

const arrNoTrue = [
  { picture: "one.jpeg", isPrincipal: false },
  { picture: "two.png", isPrincipal: false },
];

const arrEmpty = [];

describe("takes an array of objects with two items 'image' and 'isPrincipal' and returns the first value of object where isPrinciple = true", () => {
  it("takes an array of objects with two items 'image' and 'isPrincipal' and returns the first value of object where isPrinciple = true", () => {
    expect(getAvatarHandler(arr)).toBe("one.jpeg");
  });

  it("if there no isPrinciple equals to true, returns undefined", () => {
    expect(getAvatarHandler(arrNoTrue)).toBe(undefined);
  });

  it("if array is empty, returns null", () => {
    expect(getAvatarHandler(arrEmpty)).toBe(null);
  });
});
