let myName="hitesh     "
let myChannel="chai      "
// console.log(myName.truelength);//eh pura word word hi dindi a but work nhi krega so lets create sime method for it
// console.log(myName.trim().length)


let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:'sling',

    getspiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh=function(){//apa inject krta hitesh nu object ch kyoki techinincally sare cheeja object h hai
    // console.log(`hitesh is present in all object`);
    
}

// heroPower.hitesh()//now it will work

myHeros.hitesh();//oh eybhi work krega kyuki atlast sare cheeja hi object ne so accest milgya sabnu kyoki higher level object hai
//but hun que hia asi objectnu power diti tn array object sabnu miliya , but ggr array nu koi eda cheej dediye te oh object nu v milegi???

Array.prototype.heyHitesh=function(){
    // console.log(`hitesg sats sheloo`);

}

myHeros.heyHitesh()//chlega kyiki asi array nu pweer deti a achaaaaaa
// heroPower.heyHitesh() //not work kyuki lower loevel nu power mili a by defalt obect nu nhi milegi



//ineritance

const user={
    name:"user chai vala",
    email:"chai@google.com"
}
const Teacher={
    makeVideo:true
}
const teachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:teachingSupport//ehde nl access miljega ik duje nu
}
//hum ab tak agr dekhe to sare object individual ne mtlb apas ch ik duje nu jande nhi a 
// but agar mai chanda a eh crss access adn all kr paan tn ki kreya jaye

// Teacher.__proto__=user//yehi prototypical inheritance hoti hai access dena vasucally

//but ajj kl modern syntac ha ki ???
Object.setPrototypeOf(teachingSupport,Teacher)//ye set krta hai protoyype of  teachin suupport acces lelo TEACHER da


//hun agr starting bavali problem solve kriye je k true lenth pta lgje sanu 
let anotherUserName="Chaicode.    "
String.prototype.truelength=function(){
    console.log(this);
    
    console.log(`True lenth is: ${this.trim().length} `);
}
anotherUserName.truelength()
"hitesh".truelength()
"icetea".truelength()
