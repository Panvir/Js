//2 treeke be oject declare krn de
//singleton-> means ek hi object bnta hai jab hum constrcuutor nl bnega 

// Object.create()//isnu bolde a constructor vala

//okject literals

const mySym=Symbol("Key1")


const JsUser={
    name:"hotesh", // can give any value 
    "Fullname":"Hitesh chaudhary",
    [mySym]:"Mykey1",//syntax to declare symbo is use sqaure brackets
    age:18,
    location:"Jaipur",
    email:"hitesg@gmail.com",
    isLoggedIn:false,
    lastLoggindays:["Monday","saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser[email]);//error dyega key always string hundia ne use "email"
// console.log(JsUser["email"])
// console.log(JsUser["Fullname"])
// console.log(JsUser[mySym])//symbol access kre a

JsUser.email="hiteshuuu@gmail.com"//overiting the email in jsUser object
// Object.freeze(JsUser)//used to freezw object means change na kr paye koi dvara object bna to baad
JsUser.email="hitesh@miscoft.com"//ab overite nhi krega
// console.log(JsUser);

JsUser.greeting=function(){//agr nhi hai to add hojaeyga apne aap greeting
    console.log("hello js user");
    
}


JsUser.greeting2=function(){//agr nhi hai to add hojaeyga apne aap greeting
    console.log(`hello js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
// console.log(JsUser[greeting2]);//nhi chlega kyuki string form hai key so use ["greetings2"]()
console.log(JsUser["greeting2"]())
console.log(JsUser);



