//global scope
// var c=300


// scope node file ach alag hoega and console window of browser da differendt global scope hai
let a=300
if(true){
    //block scope
    //curly braces nu hi scope bolte ha
let a=10
const b=20
// var c=30//var can be accessed outside scope too
// console.log("Inner",a);
}



// console.log(a);
// console.log(b);
// console.log(c);//ye vala scope k bahr bhi access kr pare hai so bad to use things ne


//nested dxns ma jab child fxns parent fxns k things ko access kr pate hia vahi closures hai basically they remeber it
function one(){
    const username="Histes"

    function two(){
        const website="Youtube"
        console.log(username)
    }
    // console.log(website); nhi chlega
    
    two()
}

// one()

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website=" utube"
        // console.log(username+website);
        
    }
    // console.log(website);//beacause scope end hogya c
    
}
// console.log(username);//yebhi nhi chlega kyuki access nhi hai iuter nu andr da


//++++++++++++++++++++++Interesting +++++++++++++++++++++++++++++
console.log(addone(5))//yaha error nhi ayega kyoki fxn hoisting hoi  menas fxn automically starting ch rsakhdinca js compiler
function addone(num){
    return num+1;
}
// addone(5)

addTwo(5)//ye eroor dyega kyoki function variable ch declare krea c ethe hoisting nhi hundi
const addTwo=function(num){ //varibale stoer kreha funciton so coorext hai ehvi
    return num+2
}

