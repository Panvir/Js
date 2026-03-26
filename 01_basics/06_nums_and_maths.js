const score=400
// console.log(score)
const balance=new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//aise decimal ati hai 2 decimal places tak
const otherNumber=1123.8966
// console.log(otherNumber.toPrecision(5));//this out not values afyer decimal places, its from front only can last to decimal aslo

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));//converyts value using comas in indian currency
 
//++++++++++++++++++MATHS ki baate+++++++++

console.log(Math);//yebhi object hai 
//u can check maths things by writing in console of browser
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.6));
console.log(Math.sqrt(25));
console.log(Math.min(76,69));
console.log(Math.random());//value always between 0 to 1(exclusive) by default
console.log((Math.random()*10)+1)//range bnan lyi a +1 isliliye kr ahia suppose kro 0.1 random ata hai aur multiplu hua 10 se toh vo 1 hua but agr vahi hum florr lgate toh toh vo 0 bna deta ia so +1 kr ahia tnhi 1 se upr rahega
console.log(Math.floor(Math.random()*10)+1)
const min=10
const max=20

console.log(Math.floor(Math.random() * ( max - min + 1))  + min)//range bnane k liye









