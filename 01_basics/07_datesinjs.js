//Dates

let myDate=new Date()//date ibject create krea a
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate=new Date(2023,0,23)//0 se shuru hote hau months
// let myCreatedDate=new Date(2023,0,23,5,3)//5 hour,3 mins
// let myCreatedDate=new Date("2023-01-14")//strings ma yy dd mm ch 1 se start krte hau
let myCreatedDate=new Date("01-14-2023")//indian version mm dd yy

// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp=Date.now()//milliseconds degi 1970 to baad de
// console.log(myTimeStamp)
// console.log(Math.floor(Date.now()/1000))//in seconds

let newDate=new Date()
console.log((newDate));
console.log((newDate.getDay()));
console.log((newDate.getMonth())+1);//0th indexing

// `${newDate.getDate()} and time`

console.log(newDate.toLocaleString('default',{
 weekday:"long"
}))//ajj da day ajega




