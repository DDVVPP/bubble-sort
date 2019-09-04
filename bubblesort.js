// const bubbleSort = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     let currentElement = arr[i];
//     if (currentElement > arr[i + 1]) {
//       let el = arr[i + 1];
//       arr.splice(i + 1, 1);
//       arr.splice(i, 0, el);
//     }
//     console.log(`[${arr}]     `);
//   }
//   return arr;
// };

// const swap = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     let currentElement = arr[i];
//     if (currentElement > arr[i + 1]) {
//       let el = arr[i + 1];
//       arr.splice(i + 1, 1);
//       return arr.splice(i, 0, el);
//     }
//     console.log(`in swap: [${arr}]     `);
//   }
// };

const swap = (num1, num2) => {
  if (num1 <= num2) {
    return [num1, num2];
  }
  return [num2, num1];
};

const bubbleSort = arr => {
  for (let j = 0; j < arr.length; j++) {
    let currentSwap = swap(arr[j], arr[j + 1]);
    console.log(`current swap: ${currentSwap}`);
    arr.splice(j, 2, currentSwap[0], currentSwap[1]);
  }
  console.log(`array in BS: [${arr}]     `);
  return arr;
};
