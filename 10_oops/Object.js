

function multiplyby5(num){
    return num*5
}

multiplyby5.power=2
// console.log(multiplyby5(5));
// console.log(multiplyby5.power);
// console.log(multiplyby5.prototype);
//here we got to see that everthinf is object tecnically kykii dot nl sab acesss hp pareya

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe=function(){
console.log(`price is ${this.score}`);

}
const chai=new createUser("chai",25)
const tea=new createUser("tea",250)

chai.printMe()
//js new keyword de thorugh new instance bnjanda a

/* here what happens behind the scene when the new keyword is used:

A new object is created: the new keyword initiate the creation of New Java script object.

A prototype is linked : the new created object gets linked to the prototype property of the constructor function. this means that it has access to properties and methods defined on the constructors prototype

The constructor is called: the constructor function is called when they specified arguments and this is bound to the new league of created object. if no explicit return value is specified from the constructor Java script assumes this,
the newly created object , to be the intended return value.

The new object is returned:  after The sector function has been called, if it does not return nonprimitive value like object, array and function et cetera the newly created object is returned.
*/