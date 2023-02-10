export function wordListSort(wordList) {
  /// remove words under 3 letters
  let newList = wordList.filter((element) => element.length >= 3);

  // reorganise words by size
  newList = wordList.sort(function (a, b) {
    return b.length - a.length;
  });

  return newList;
}
