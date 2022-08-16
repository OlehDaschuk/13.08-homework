const longWord = require("./to_long_word");

const longWordTests = [
  {
    parameters: ["localization"],
    expectedResult: "l10n",
  },
  {
    parameters: ["internationalization"],
    expectedResult: "i18n",
  },
  {
    parameters: ["word"],
    expectedResult: "word",
  },
  {
    parameters: [""],
    expectedResult: "",
  },
  {
    parameters: ["1"],
    expectedResult: "1",
  },
];

for (const testCase of longWordTests) {
  test(`longWord(${testCase.parameters[0]}) expexted to equel ${testCase.expectedResult}`, () => {
    expect(longWord(testCase.parameters[0])).toBe(testCase.expectedResult);
  });
}
