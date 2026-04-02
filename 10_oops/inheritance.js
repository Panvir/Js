class User{
    constructor(username){
        this.username=username
    }

    Logme(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password)//overite kre a kyuki teache da aalg ctor hona chaida a
    {
        super(username)//asl ch pehla si call() use krde c
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai=new Teacher("chai","chai@gmail,.com","123")
chai.addCourse()
chai.Logme()
const masalaChai=new User("masalachai")
masalaChai.Logme()

console.log(chai instanceof Teacher);//yaha hum pcuhde a k chai insatnce hai Teacher class da??
console.log(chai instanceof User);//yaha hum pcuhde a k chai insatnce hai Teacher class da?? yes hai user a hi uto reha
