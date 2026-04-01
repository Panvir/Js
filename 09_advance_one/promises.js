//promie is an object representing the eventual compeltion or failure of asynchoronous code
const promiseOne = new Promise((resolve, reject) => {
  //do an async task
  //b calls,cryptography related,netork
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

//but resolve reject kr ki rahe a? so crayed lets consume it _> resolve ka connection sidha .then() k sath
promiseOne.then(() => {
  console.log("Promise consumed"); //aise nhi chlega kyuki humne connect nhi kra resolve aur then ko so call resolve nu ute promise ch
});

//yyebhi kr skte the
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "chai", email: "chai@exmplae.com" }); //aise data pass kr skte hai then ma
  }, 1000);
});
//but passed data lega kasie then ? see belopw it is passed as parameter in then call back fnction
promiseThree.then((user) => {
  console.log(user);
});

//ab errror based checking kida krde ne promise nl oh dekhde a
const promisefour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Hitesh", password: "124" });
    } else {
      reject("error: something went wrong");
    }
  }, 1000);
});
promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    //use returned value from user.usernma is passed into this then as a parameer
    console.log(username);
  })
  .catch(function (error) {
    //catch is for hadnling error
    console.log(error);
  })
  .finally(() => {
    //ye vala rin hoga hi hoga
    console.log("The promise is either resolved or rejected");
  }); //yaha mtlb kaaam hogya eh defaut hai chlega hi


  //ek aur cheej hai async await vali cheej -> ye thoda wait krega kaam k hone ka agr hua to aggge chlega 
const promisefive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "124" });
    } else {
      reject("error: JS went wrong");
    }
  }, 1000);
})

async function consumePromiseFive(params) {
   try {
    const response= await promisefive//waitinf ch a promis is object a yaad rakheo wait wait krega chngi tra
    console.log(response);
    
   } catch (error) {
    console.log(error);
   }
   
}

consumePromiseFive()

//aap chahe .then vali cheek krp bhave asyn await  h try catch krk use kro gl iko a

//+++++++++++++++++++lets do some work+++++++++++++++

//ist by try catch vangu
// async function getAllUsers() {
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')//fetch v promise return krda a  
//     const data= await response.json() // yebhi tiem leta hai so wait
//     console.log(data);
//     }catch(error){
//         console.log("E: ",error);
        
//     }
    
// }
// getAllUsers()

//now do it by .then vali cheej

fetch('https://jsonplaceholder.typicode.com/users')//fetch also return promise it inclues resolve reject in built only also comma lgake tusi parameter bhi pas kr skde a url ch
.then((response)=>{
    return response.json()
}).then((data)=>{
console.log(data);
})
.catch((error)=>{
    console.log(error);
})

//fetch ik priroityies queue bnada hai tnhi sab to pehla run hoya c eh fetch, Microtask queue hundi a basically
//alsi fetch ch resolve vali cheej onFullfilled[] hundi a 