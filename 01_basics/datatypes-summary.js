// Primitive ther are allawys cal by value

//7 types: String, Number, Boolean, null, undefined, Symbol(uniqur bnane k liye kisi bhi cheej ko ), BigInt(scientific values lyi)

// agr type define kre ho tn  static hai , ut js dynamic hai 

const score=100
const scoreValue=100.3

const isLoggedIn= false

const outsideTemp=null
let useremail; //undefined value

//sybol talk
const id= Symbol('123')
const anotherID=Symbol('123')//;hra hia yebhi same hai but eh same nhi hai ehi tn khasiyat hai symbol di
// console.log(id===anotherID);
console.log(id);
console.log(anotherID);

const bigNumber=34567924729434345345n
// console.log(bigNumber);




//Reference or Non premitive

//Array, Objects, Functions

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"hitesh",
    age:22,
}

const myFunction=function(){
    console.log("hellp workd");
    
}

console.log(typeof myFunction);//function
console.log(typeof id);

// +++++++++++++++++++++++
//stack(Primitive types), heap(non Primitive)
let myYoutube="Hiteshchoudharyhello"
let anotherbane=myYoutube
anotherbane="chairaurcode"
console.log(anotherbane);
console.log(myYoutube);
let userOne={
    email:"user.gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="nippu@gmail,com"
console.log(userOne);
console.log(userTwo);


