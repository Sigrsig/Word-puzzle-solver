export function wordListSort(wordList) {
  /// remove words under 3 letters
  let newList = wordList.filter((element) => element.length >= 3);

  // reorganise words by size
  newList = wordList.sort(function (a, b) {
    return b.length - a.length;
  });

  return newList;
}

// Function to shuffle words - Was used in testing out solutions
// function shuffle(array) {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex != 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }
//   return array;
// }
// newList = shuffle(newList);
