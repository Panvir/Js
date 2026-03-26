//array
//array in js are resizable, copy operation are shallow copy means reference pass hunda a
const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","naagraj"]
const myArr2=new Array(1,2,3,4)//apne aap daldega sqaure brackets alsp object de properties lyi console ch jake dkehlo yr
// console.log(myArr[0]);

//Array Mthids

// myArr.push(6)//append value 6
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)//adds value in front of array
// myArr.unshift(9)
// myArr.shift()//pops from front

// console.log(myArr.includes(9));//true false ayega
// console.log(myArr.indexOf(9))//index dsda elemtn dsda if no element there like asked then -1

// const newArrr=myArr.join()//values same ayegi means bind hojayegi using comma seperator,but type change hoega to string
// console.log(myArr);

// console.log(newArrr)

//slice,splice
console.log("A",myArr);

const myn1=myArr.slice(1,3)//extracts index 1 to 3(exclusive) doesnot have eddect on original array
console.log(myn1);
console.log("B",myArr);


const myn2=myArr.splice(1,3)//it also extracts but it manipultes the orohinal array basically deltes that indexes range things from array
console.log(myn2);
console.log("C",myArr);




