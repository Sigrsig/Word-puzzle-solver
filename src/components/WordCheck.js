import React from "react";
import { wordListSort } from "./wordListSort";
import { sortWordList } from "./sortWordList";

function WordCheck({ char, unsortedWordList }) {
  const duplicatesFound = findDuplicates(char).length > 0;
  const numbersFound = findNumbers(char);
  const emptyFound = findEmpty(char);

  let wordList = wordListSort(unsortedWordList);
  let puzzleLetters = char.join("");

  // Checking the chosen letters
  function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
  }
  function findNumbers(arr) {
    return arr.filter((element) => !isNaN(element)) > 0;
  }
  function findEmpty(arr) {
    return arr.includes("") || arr.includes(" ");
  }

  // Returns whether or not all the letters in the character list are used
  function areAllLettersUsed(combinedWords) {
    for (let i = 0; i < puzzleLetters.length; i++) {
      if (!combinedWords.includes(puzzleLetters[i])) return false;
    }
    return true;
  }

  function solvePuzzle() {
    wordList = sortWordList(wordList, puzzleLetters);

    let wordChain = [];
    let threeWordChain = [];
    console.log("starts solving");
    // Compares all words with one another and if all chosen letters are used up adds them to the word chain
    for (let x = 0; x < wordList.length; x++) {
      for (let y = 0; y < wordList.length; y++) {
        let word1 = wordList[x];
        let word2 = wordList[y];
        if (word1 !== word2 && word1[word1.length - 1] === word2[0]) {
          let tempWord = wordList[x] + wordList[y];
          if (areAllLettersUsed(tempWord)) {
            wordChain.push([`${word1}, ${word2}`]);
          }
        }

        for (let z = 0; z < wordList.length; z++) {
          let word3 = wordList[z];
          if (
            word1 !== word2 &&
            word1[word1.length - 1] === word2[0] &&
            word2[word2.length - 1] === word3[0]
          ) {
            let tempWord2 = wordList[x] + wordList[y] + wordList[z];
            if (areAllLettersUsed(tempWord2)) {
              threeWordChain.push([`${word1}, ${word2}, ${word3}`]);
            }
          }
        }
      }
    }
    if (wordChain.length === 0) {
      return threeWordChain;
    } else return wordChain;
  }

  if (duplicatesFound) {
    return <div>{"Duplicates found"}</div>;
  } else if (numbersFound) {
    return <div>{"Number found"}</div>;
  } else if (emptyFound) {
    return <div>{"Empty input found"}</div>;
  } else {
    let result = solvePuzzle();
    console.log("===", result);
    return (
      <>
        <h2>Solutions:</h2>
        <ol>
          {result.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default WordCheck;
