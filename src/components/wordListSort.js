export function wordListSort(wordList) {
  /// remove words under 3 letters
  let newList = wordList.filter((element) => element.length >= 3);
  //shuffle words
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  // newList = shuffle(newList);

  // remove words with double letters (doesn't actually NEED to be done atm)

  // reorganise by size (also doesn't need tobe done atm)
  newList = wordList.sort(function (a, b) {
    return b.length - a.length;
  });
  return newList;
}
