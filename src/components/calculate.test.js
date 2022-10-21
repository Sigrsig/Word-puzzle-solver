import { calculate } from "./calculate";

describe("calculate", () => {
  const selectedChar = ["c", "b", "v", "q", "a", "e", "z", "l"];

  const wordList = ["hive", "cocoon", "cable", "cave", "wool"];

  it("should find a word that works for the character input", () => {
    const result = calculate(selectedChar, wordList);
    expect(result).toBe("cable");
  });
});
