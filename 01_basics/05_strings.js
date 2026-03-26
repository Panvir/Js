const name="hitesh"
const repoCount=50
// console.log(name+repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //ise string interpolation bolte hai

const gameName= new String('hites-che-tanya')//string object bnega
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)//last index is exlusive
console.log(newString);

const anotherrString=gameName.slice(0,4)//supports negative indexing too
console.log(anotherrString);

const newStringOne="  hitesh.  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh  chaudhary"//browser spaces nhi smjda automatically %20 lgadinda a space di tha te

console.log(url.replaceAll(' ','%20'));

console.log(url.includes('hit'))

console.log(gameName.split('-'))







