
class User{
    constructor(username)
    {
        this.username=username
    }

    logMe(){
        console.log(`usernam is : ${this.username}`);
        
    }

   static createID(){ //ye bnane nhi deta basically acces nhi deta accesid da object nu
        return `21323`
    }
}

const hitesh=new User("hitesh")
// console.log(hitesh.createID());

class teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
    
}

const iphone=new teacher("iphnone","nippu@gmai;c,o,")
console.log(iphone.createID());


