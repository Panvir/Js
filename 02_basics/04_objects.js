// const tinderUser=new Object()//ise singleton Obekct bolte hai
const tinderUser={}//ye literal vala hai output same hi hoga pr
tinderUser.id="123abc"
tinderUser.name="Nippu"
tinderUser.isLoggedIn=false


// console.log(tinderUser);
const regularuser={
    email:"summu@gmail,cm",
    fullname:{
        userFullname:{
            firstName:"Hites",
            lastName:"Singh"
        }
    }
}
// console.log(regularuser.fullname?.userFullname.lastName);//? means if exits then okay a
const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"a",
    4:"b",
}
const obj4={
    5:"a",
    6:"b",
}

// const ob3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)//combines values obj1 and obj2 agr {} nhi lgauge tn va;ues obj1 ch stpore hojangia

const obj3={...obj1,...obj2}//eh most used hunda a spread operaitor

// console.log(obj3);

const users=[
    {
        id:1,
        email:"Hitmail.gmial.com"
    },
    {
        id:2,
        email:"Hitmail.gmial.com"
    },
    {
        id:3,
        email:"Hitmail.gmial.com"
    }
]

console.log(users[0].email)

console.log(Object.keys(tinderUser));//tinderuser di keys angia

console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))//array of key:value paurs

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//return true and flase


//baki properts dekhn lyi objects di console te jake dkehlo yr declare krk ki ki properts ya prototype ne





