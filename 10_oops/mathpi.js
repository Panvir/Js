// console.log(Math.PI);
// Math.PI=5//hum ye nhi kr pare so aise kr skte ha 
// console.log(Math.PI);


const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")//aise hum Math object ki value PI nu kdare hai k ki ki a ohch
// console.log(descriptor);//jab dkeho tn pt algreya writable nhi a 

const chai={
    name:"ginger chai",
    price:250,
    isavailable:true,
    orderChai:function(){
        console.log("Chai nhi bni");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));//yaha undefined ayega kyuki chai property nhi hai vo ek object hai so specify krna pena kerhi chaidi a property so write "name " aslo
//hun asi dkea k apnia. v properties ch pta lgya writable true a etc etc sab true a but asi ohnu false krna a kyuki asi b chandee a k koi change an kr ske

Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:false
})//aise hum changes kreg properties ch
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key,value] of Object.entries(chai)) {//iterable bnan lyi Object,entries hai

    if(typeof value != 'function'){
        console.log(`key: ${key} value: ${value}`);//asi dkehea iterate hini hoya name because enumberable false kri c asi chai obec di name okyy
    } 
}


//hun ajo k pi bdliye ehhehhe 
// console.log(Math.PI);
Object.defineProperty(Math,'PI',{
    writable:true,
    enumerable:true,
    configurable: true
})
Math.PI=5
console.log(Math.PI);
//this will still not work becasue
// If a property is non-configurable, its descriptor cannot be changed, so Math.PI cannot be overridden”



