//object literal se baat krte hai shuru
const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetail: function(){
        // console.log("Got user detail from data base");
        // console.log(`usernmae: ${this.username}`);
        console.log(this);
        
        
    }
}




// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);

//new keyword instance bnanda ise hume constryctior fxn bolde ne
// const promiseOne=new Promise()
// const date= new Date()

function User(username,loginCount,isLoggedIn){
    this.username= username //this,username vala varibale hai
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`welcome golu ${this.username}`);
        
    }
    // return this
}

const userOne=new User("hiteshji",12,true)//yaha new constructoor bnda a new nl basiclaly instance
const userTwo=new User("chairaurcpde",5,false)
console.log(userOne.constructor);
// console.log(userTwo.greeting());

//so instance nl nva objct create hoya -> constructor fxn call hota hia-> new keytword nl basically assign



