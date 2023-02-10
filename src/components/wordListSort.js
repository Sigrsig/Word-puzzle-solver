export function wordListSort(wordList) {
  // reorganise words by size
  let newList = wordList.sort(function (a, b) {
    return b.length - a.length;
  });

  return newList;
}
