import React from "react";
import { useState, useEffect } from "react";
import words from "../wordlists/words.txt";
import "./Main.css";
import WordCheck from "./WordCheck";

function Main() {
  const [result, setResult] = useState();

  const [char, setChar] = useState({
    A: "b",
    B: "x",
    C: "n",
    D: "e",
    E: "o",
    F: "c",
    G: "r",
    H: "s",
    I: "t",
    J: "i",
    K: "g",
    L: "l",
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
    setResult(
      <WordCheck char={Object.values(char)} unsortedWordList={wordList} />
    );
  };

  return (
    <div className="front-page">
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
      </div>
      <div className="outcome">{result}</div>
    </div>
  );
}

export default Main;
