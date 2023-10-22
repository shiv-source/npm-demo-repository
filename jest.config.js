/** @type {import('jest').Config} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  rootDir : "./test",
  verbose: true,
  testPathIgnorePatterns: ["./node_modules/", "./dist/", "./src/"],
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
};
