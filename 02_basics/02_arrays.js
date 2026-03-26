const marvelheros=["thor","ironman","Spiderman"]
const dc=["superman","flash","batman"]
// marvelheros.push(dc)//array k andr array ajati hai
// console.log(marvelheros);
// console.log(marvelheros[3][1]);

// const allheros=marvelheros.concat(dc)//this retruns new array
// console.log(allheros);

const allNewheros=[...marvelheros,...dc]//... se array nhi rehta cvo spread out hojati hai // like concat
// console.log(allNewheros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]//array k andr k adnr array 

const real_another_array=another_array.flat(Infinity)//arrays nu flat krdega as a single array infinity di jgah depth dedo kine tak jana doongai ch
console.log(real_another_array);


console.log(Array.isArray("hitesh"))//btao ye array ahai??? NO false
console.log(Array.from("hitesh"));
console.log(Array.from({name:"Hitesh"}));//empty array dyega kyoki specify kro key da bnana a ya values da bnana a

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


