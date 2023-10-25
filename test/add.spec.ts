import { add } from "../src";

describe("Add functions", () => {
  it("should add 12 by 3", () => {
    const result = add(12, 3);
    expect(result).toEqual(15);
  });
});
