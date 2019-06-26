const myArray = [{ x: 100 }, { x: 400 }, { x: 1200 }];

myArray.forEach((element, index, array) => {
  console.log(element.x);
  console.log(index);
  console.log(array);
});

const 