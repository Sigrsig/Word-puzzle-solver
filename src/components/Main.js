import React from "react";
import { useState, useEffect } from "react";
import words from "./words.txt";
import { calculate } from "./calculate";

import "./Main.css";

function Main() {
  const miniWordList = [
    "aardvark",
    "alabama",
    "cayote",
    "zzzzz",
    "zanzibar",
    "quest",
  ];

  const [result, setResult] = useState("");

  const [char, setChar] = useState({
    //top
    A: "a",
    B: "e",
    C: "z",
    //right
    D: "c",
    E: "z",
    F: "z",
    //bottom
    G: "z",
    H: "b",
    I: "o",
    //left
    J: "y",
    K: "z",
    L: "t",
  });

  const [wordList, setWordList] = useState([]);
  const [filled, setFilled] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
    J: "",
    K: "",
    L: "",
  });

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
    //setFilled({ ...filled, [event.target.name]: "x" });
  };

  const doMaths = () => {
    setResult(calculate(Object.values(char), miniWordList));
    console.log("result ===", result);
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

      {/**To do: box animation a different component? */}
      <div className="outcome">{result}</div>
    </div>
  );
}

export default Main;
