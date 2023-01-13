import React from "react";
import { useState, useEffect } from "react";
import words from "./words.txt";
import "./Main.css";
import WordCheck from "./WordCheck";

function Main() {
  // Test list
  const miniWordList = [
    "aardvark",
    // "aroleptbwmqz",
    "alabama",
    "cayote",
    "zanzibar",
    "quest",
    "razmataz",
  ];

  const [result, setResult] = useState();

  const [char, setChar] = useState({
    A: "n",
    B: "o",
    C: "l",
    D: "g",
    E: "t",
    F: "v",
    G: "m",
    H: "a",
    I: "r",
    J: "b",
    K: "u",
    L: "e",
  });

  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    fetch(words)
      .then((res) => res.text())
      .then((data) => {
        setWordList(data.split("\n"));
        console.log("Loaded word data");
      });
  }, []);

  const handleChange = (event) => {
    setChar({ ...char, [event.target.name]: event.target.value });
  };

  const doMaths = () => {
    console.log("Calculating");
    // for some reason setWordlist wasn't working :/
    setResult(<WordCheck char={Object.values(char)} wordList={wordList} />);
    console.log("result: ", result);
  };

  return (
    <div className="board">
      <div className="char-top">
        <input
          type="text"
          name="A"
          maxLength="1"
          value={char.A}
          onChange={handleChange}
        />
        <input
          type="text"
          name="B"
          maxLength="1"
          value={char.B}
          onChange={handleChange}
        />
        <input
          type="text"
          name="C"
          maxLength="1"
          value={char.C}
          onChange={handleChange}
        />
      </div>
      <div className="char-right">
        <input
          type="text"
          name="D"
          maxLength="1"
          value={char.D}
          onChange={handleChange}
        />
        <input
          type="text"
          name="E"
          maxLength="1"
          value={char.E}
          onChange={handleChange}
        />
        <input
          type="text"
          name="F"
          maxLength="1"
          value={char.F}
          onChange={handleChange}
        />
      </div>
      <div className="char-bottom">
        <input
          type="text"
          name="G"
          maxLength="1"
          value={char.G}
          onChange={handleChange}
        />
        <input
          type="text"
          name="H"
          maxLength="1"
          value={char.H}
          onChange={handleChange}
        />
        <input
          type="text"
          name="I"
          maxLength="1"
          value={char.I}
          onChange={handleChange}
        />
      </div>
      <div className="char-left">
        <input
          type="text"
          name="J"
          maxLength="1"
          value={char.J}
          onChange={handleChange}
        />
        <input
          type="text"
          name="K"
          maxLength="1"
          value={char.K}
          onChange={handleChange}
        />
        <input
          type="text"
          name="L"
          maxLength="1"
          value={char.L}
          onChange={handleChange}
        />
      </div>
      <button onClick={doMaths} className="submit-b">
        Calculate
      </button>
      <div className="outcome">{result}</div>
    </div>
  );
}

export default Main;

// If I wrote this a different way I would like to try basically brute forcing it until we find a 1-2 word solution
// as it is right now the word list is ordered by what will add the most new letters to the list

// go through the list and see which word will add the most new letters??

// Next up:
/**
 * Go through the entire list and find the word that adds the most new letters from the current character list
 * repeat
 */
