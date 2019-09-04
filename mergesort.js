function split(wholeArray) {
  if (wholeArray.length < 2) {
    return wholeArray;
  } else {
    const halvedLength = Math.floor(wholeArray.length / 2);
    const firstHalf = wholeArray.slice(0, halvedLength);
    const secondHalf = wholeArray.slice(halvedLength);
    return [firstHalf, secondHalf];
  }
}

//To do
