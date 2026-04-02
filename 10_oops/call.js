function setUsername(username){
    //complex db call
    this.username=username
    console.log("called");
    
}

function createUser(username,email,password){
    setUsername.call(this,username) // call reference hol krk rekahda a nhi tn ohtn call stack cho nikl chuka hoega so bettr a call use krk refrence store krna pena but hle. v priblem solbenhihoi a_> pass this as a parameter
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@gmai.cpom","123")
console.log(chai);//yaha chai nhi ara , ktuki setIsernae ho nhi reha call but lgreya jida call horea so setuser just refrerne hai so call mathod hunda a ik
