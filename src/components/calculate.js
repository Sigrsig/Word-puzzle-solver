/**Steps
 * 1. Take first word in wordList
 * 2. Take first letter of first word
 * 3. Search through top -> right -> bottom -> left
 *  a4. If not found, move on to next word
 *  b4. If found X the letter and set side
 *  b5. Move on to next letter and search through (ignoring current side, etc.)
 *  b6. If found complete word, return it
 */

export const calculate = (char, wordList) => {
  let result = null;
  let wordNum = 0;
  let currentSide = "";
  console.log("wordlist=", wordList);
  console.log("char", char);

  const sides = {
    top: ["A", "B", "C"],
    right: ["D", "E", "F"],
    bottom: ["G", "H", "I"],
    left: ["J", "K", "L"],
  };

  while (result === null && wordList[wordNum]) {
    if (checkWord(wordList[wordNum])) {
      result = wordList[wordNum];
      console.log("Found! Word:", result);
      break;
    }
    wordNum++;
  }

  function checkWord(word) {
    // This isn't working JUST yet... Still some issues

    let characterLocated = false;
    console.log("checking:", word);

    for (let i = 0; i < char.length; i++) {
      for (let l = 0; l < word.length; l++) {
        // This could be done WAY better
        if (char[i] !== word[l]) {
          if (!char[i + 1] && !characterLocated) {
            console.log("Last char and no matches " + word + " does not work");
            return false;
          }
        } else {
          if (!char[i + 1]) {
            console.log(word + " works!");
            result = word;
            console.log("===", result);
            return true;
          }
          characterLocated = true;
        }
      }
    }
  }

  return result;
};
