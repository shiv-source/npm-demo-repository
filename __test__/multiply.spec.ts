import { multiply } from "../src";

describe("Multiply functions", () => {
  it("should multiply 5 by 3", () => {
    const result = multiply(5, 3);
    expect(result).toEqual(15);
  });
});
