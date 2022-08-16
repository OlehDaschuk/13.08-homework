const capsLock = require("./capslock");

const capsLockTests = [
  {
    parameters: ["cAPS"],
    expectedResult: "Caps",
  },
  {
    parameters: ["Lock"],
    expectedResult: "Lock",
  },
  {
    parameters: ["wHY DO wE NEED cAPS lOCK?"],
    expectedResult: "Why do We need Caps Lock?",
  },
  {
    parameters: ["FuNkY iS nOt CaPs!"],
    expectedResult: "FuNkY Is nOt CaPs!",
  },
];

for (const testCase of capsLockTests) {
  test(`longWord(${testCase.parameters[0]}) expexted to equel ${testCase.expectedResult}`, () => {
    expect(capsLock(testCase.parameters[0])).toBe(testCase.expectedResult);
  });
}
