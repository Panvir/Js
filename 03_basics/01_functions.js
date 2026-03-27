

function sayMyname(){
console.log("hi");
}
// sayMyname()//agr ( ) na lgya toh reference jayega just so () nl call hoea functon

// function addtwoNumbers(number1,number2){//number1 and number2 are called parameters

//     console.log(number1+number2);    
// }
function addtwoNumbers(number1,number2){//number1 and number2 are called parameters

    // let result=number1+number2
    // return result    
    return number1+number2
    
}
const result=addtwoNumbers(2,6)//jab call krte hai tab parameter ko arguments bolte hai
// console.log("results:",result);

function loginUserMessage(username = "Sammy")//="sammy" is default value
{
    if(!username){
        console.log("Pls enter a username");
        return
        
    }
    return `${username} logged in just`
}

// console.log(loginUserMessage("hitesh"))

// console.log(loginUserMessage("itesh"))


function calculateCartPrice(val1,val2,...num1){//but agr blaues hor agyia cart ch in that case we have ...ref thing, that bundels evrthing andr tn loop lgake kr skte hau add paass krne ki baat thi bs 
return num1
}
// console.log(calculateCartPrice(2,400,500,2000))

const user={
    username:"hitesh",
    prices:199
}
function handleobject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleobject(user)
handleobject({
    username:"Sam",
    price:400
})
//ab array bho tru krlege hai
const myNewArray=[200,300,400]
function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400]))
