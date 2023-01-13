import React, { useState } from "react";
import { wordListSort } from "./wordListSort";

function WordCheck({ char, wordList }) {
  const duplicatesFound = findDuplicates(char).length > 0;
  const numbersFound = findNumbers(char);
  const emptyFound = findEmpty(char);

  const [result, setResult] = useState("");
  const sortedWordList = wordListSort(wordList);
  let testletters = char.join("");
  let wordChain = [];

  const charStatus = [
    "top",
    "top",
    "top",
    "right",
    "right",
    "right",
    "bottom",
    "bottom",
    "bottom",
    "left",
    "left",
    "left",
  ];

  function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
  }

  function findNumbers(arr) {
    return arr.filter((element) => !isNaN(element)) > 0;
  }

  function findEmpty(arr) {
    return arr.includes("") || arr.includes(" ");
  }

  function checkWord(word) {
    console.log("checking: ", word);
    let currentSide = "";

    for (let l = 0; l < word.length; l++) {
      for (let i = 0; i < char.length; i++) {
        if (word[l] === char[i] && charStatus[i] !== currentSide) {
          currentSide = charStatus[i];
          break;
        } else if (!char[i + 1]) {
          return false;
        }
      }
      if (!word[l + 1]) {
        return true;
      }
    }
  }

  function searchWordList() {
    // find a better way to do the sorting...

    // while we have not used all the letters
    while (checkIfAllCharUsed() === false) {
      // if there is no current word just find the first word that fits
      if (wordChain.length === 0) {
        let newlettersnum = 0;
        let currBestWord;
        for (let index = 0; index < sortedWordList.length; index++) {
          if (checkWord(sortedWordList[index])) {
            let currNumSum = numbNewLetters(sortedWordList[index]);
            if (currNumSum > newlettersnum) {
              newlettersnum = currNumSum;
              currBestWord = sortedWordList[index];
            }
          }
        }
        wordChain.push(currBestWord);
        console.log("===current chain:", wordChain);
      } else {
        let newlettersnum = 0;
        let currBestWord;
        for (let index = 0; index < sortedWordList.length; index++) {
          let tempWord = wordChain[wordChain.length - 1];
          let containsNewLetters = usesNewLetters(sortedWordList[index]);

          // make sure not to choose the same word twice and the word starts with the last letter of the last word
          if (
            !wordChain.includes(sortedWordList[index]) &&
            tempWord.slice(-1) === sortedWordList[index].charAt(0) &&
            // if the word adds more letters to the used letters
            containsNewLetters
          ) {
            if (checkWord(sortedWordList[index])) {
              // check how many new letters it adds to the game
              let currNumSum = numbNewLetters(sortedWordList[index]);
              if (currNumSum > newlettersnum) {
                newlettersnum = currNumSum;
                currBestWord = sortedWordList[index];
              }
            }
          }
        }
        wordChain.push(currBestWord);
        console.log("===current chain:", wordChain);
      }
    }
  }

  function checkIfAllCharUsed() {
    let tempCharchain = char.join("");
    let tempwordChain = wordChain.toString();

    for (let i = 0; i < tempwordChain.length; i++) {
      for (let y = 0; y < tempCharchain.length; y++) {
        if (tempwordChain[i] === tempCharchain[y]) {
          tempCharchain = tempCharchain.replace(tempwordChain[i], "");
        }
      }
    }

    // why did using this as a state make the program loop???
    testletters = tempCharchain;

    if (tempCharchain.length !== 0) {
      console.log("===Still letters in there: ", tempCharchain);

      return false;
    } else {
      console.log("===All letters used!");
      return true;
    }
  }

  function usesNewLetters(word) {
    let letterfound = 0;
    for (let i = 0; i < testletters.length; i++) {
      if (word.includes(testletters[i])) return true;
    }
    return false;
  }

  function numbNewLetters(word) {
    let letterfound = 0;
    for (let i = 0; i < testletters.length; i++) {
      if (word.includes(testletters[i])) letterfound++;
    }
    return letterfound;
  }

  // todo: change these to setResult()
  if (duplicatesFound) {
    return <div>{"Duplicates found"}</div>;
  } else if (numbersFound) {
    return <div>{"Number found"}</div>;
  } else if (emptyFound) {
    return <div>{"Empty input found"}</div>;
  } else if (checkIfAllCharUsed() === false) {
    searchWordList();
  }
  return (
    <div>
      <div>{result}</div>
    </div>
  );
}

export default WordCheck;
