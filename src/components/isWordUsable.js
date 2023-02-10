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

// Checks if the word passed in is usable in the puzzle
export function isWordUsable(word, puzzleLetters) {
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
