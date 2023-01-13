import React from "react";
import { render, screen } from "@testing-library/react";
import WordCheck from "./WordCheck";

describe("calculate", () => {
  const selectedChar = [
    "r",
    "x",
    "b",
    "o",
    "a",
    "g",
    "m",
    "u",
    "d",
    "l",
    "i",
    "e",
  ];

  const repeatedChar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "a",
    "i",
    "j",
    "k",
    "l",
  ];

  const numberChar = [
    "r",
    "x",
    "b",
    "o",
    "1",
    "g",
    "m",
    "u",
    "d",
    "l",
    "i",
    "e",
  ];

  const emptyChar = ["r", "x", "b", "o", "1", "", "m", "u", "d", "l", "i", "e"];

  const wordList = [
    "aardvark",
    "act",
    "boat",
    "alabama",
    "cayote",
    "zzzzz",
    "robo",
    "zanzibar",
    "quest",
  ];

  const singleWordList = ["romlxauibgde"];

  it("should find a word that works for the character input", () => {
    render(<WordCheck char={selectedChar} wordList={wordList} />);

    expect(screen.getByText("alabama")).toBeInTheDocument();
  });

  it("should not match a letter if it is on the same side as the current letter", () => {
    render(<WordCheck char={selectedChar} wordList={wordList} />);

    expect(screen.queryByText("boat")).not.toBeInTheDocument();
  });

  describe("character input checks", () => {
    it("should not be possible to have an empty input", () => {
      render(<WordCheck char={emptyChar} wordList={wordList} />);
      expect(screen.getByText("Empty input found")).toBeInTheDocument();
    });

    it("should not be possible to input numbers", () => {
      render(<WordCheck char={numberChar} wordList={wordList} />);
      expect(screen.getByText("Number found")).toBeInTheDocument();
    });

    it("should not be possible to input duplicate letters", () => {
      render(<WordCheck char={repeatedChar} wordList={wordList} />);

      expect(screen.getByText("Duplicates found")).toBeInTheDocument();
    });
  });

  describe("word search", () => {
    it("should mark the letters already used in the chart", () => {
      render(<WordCheck char={selectedChar} wordList={singleWordList} />);
      expect(screen.getByText("All letters used")).toBeInTheDocument();
    });

    it.todo("should set the current side in the diagram");
  });
});
