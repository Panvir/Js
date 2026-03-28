const user={
    username:"Hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcom to website`);//huem cirrent contect ko refer krna hai so this kwyword use krege
        console.log(this);
        
    }
}

// user.welcomeMessage()

// user.username="Panvirsingh"
// user.welcomeMessage()
//console.log(this);//khali {} ayega kyuki eh node inveroment da this chkreya, but agr same this jdo brwoeser console ch chlauge tn hor v cheeja angia so browser ch global object window objetc hota hai  thats why this happens

// function chai(){
//     let username="hitesh"
//     console.log(this.username);//undefined ayega kyuki this current object te work krda a this ethe object haini kyo so nhi aya kuch
    
// }
// chai()// ab values angia this dia kyui oh funciton dia chkrea a

//++++++++++++++++++=arrow function++++
const chai=()=>{
    let username="hitesh"
    console.log(this);
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(2,3))

//++++++implict return bhi hunda hai 
// const addTwo=(num1,num2)=>  (num1+num2)//ye single line lyi work krega and sure hai return nhi use krna hai agr culy ch paya tn return pana hi payega 

// console.log(addTwo(2,3))

//++++++++++explicit return++++++++
const addTwo=(num1,num2)=> ( {username:"hitesh"} )//jdo object return krna hoye tn bracets angia hi

console.log(addTwo(3,4));

const myarray=[2,4,6,77,8]
// myarray.forEach(()=>{})//ye agge pdhage cheeja

