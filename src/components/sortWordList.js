const puzzleSides = [
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

// Sorts the word list by words that actually work in this case
export function sortWordList(wordList, puzzleLetters) {
  let tempList = [];
  for (let index = 0; index < wordList.length - 1; index++) {
    if (isWordUsable(wordList[index], puzzleLetters)) {
      tempList.push(wordList[index]);
    }
  }
  return tempList;
}

// Checks if the word passed in is usable in the puzzle
function isWordUsable(word, puzzleLetters) {
  let currentPuzzleSide = "";

  for (let l = 0; l < word.length; l++) {
    for (let i = 0; i < puzzleLetters.length; i++) {
      if (
        word[l] === puzzleLetters[i] &&
        puzzleSides[i] !== currentPuzzleSide
      ) {
        currentPuzzleSide = puzzleSides[i];
        break;
      } else if (!puzzleLetters[i + 1]) {
        return false;
      }
    }
    if (!word[l + 1]) {
      return true;
    }
  }
}
