/** @type {import('jest').Config} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  rootDir : "./__test__",
  verbose: true,
  testPathIgnorePatterns: ["./node_modules/", "./dist/", "./src/"],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
};
