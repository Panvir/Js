const userEmail=[]//ye work kreha h]pr so konsi truth konsi false hogi
if(userEmail)
{
    console.log("got user email");
    
}else{
    console.log("dont have user email");
    
}

//falsy value -> false,0,-0,BigInt 0n,null,defined,NaN,""
//truthy values-> "0","false",//lyuki strng k anfr hai false,[],{},funtion(){}

if(userEmail.length===0)//u can check if array is empy using this
{
console.log("array is empty");
}
const emptyObject={}
if(Object.keys(emptyObject).length===0){
    console.log("Object is empty");
    
}

//Nullish Coalessing Operator(??):null undefined
let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15
val1=null ?? 10 ?? 15 ?? 78
console.log(val1);

//terniary operator_>ye true flase lyi km anda a

// condittion?true:false
const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80"):console.log("more than 80");
;

