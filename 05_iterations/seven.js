const myNumers = [1, 2, 3, 45, 5, 77, 7];

// const newNumns=myNumers.map((num)=>{ return num+10})//map sarea te iterate krega elemtns te
// console.log(newNumns);

const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)//value agge agge pass hundia jandia ne pichle pipe dia
  .filter((num) => num >= 40); //this is callled chain rule
console.log(newNums);
