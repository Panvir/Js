//for of loops for arrrays
//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
    
}

const greetings="hello world"
for (const greet of greetings) {
    // console.log(` each char is ${greet}`);
    
}

//maps for arrays

const map=new Map()
map.set('IN',"India")
map.set('USA',"UNited states of emerica")
map.set('tippu',"kdich")
console.log(map);

for (const key of map) {
    console.log(key);
    
}
for (const [key,value] of map) { //[key,value] this thi is destructuring of array
    console.log(key,':-M', value);
    
}
const myObject={
    "game1":"NFS",
    "game2":'spiderman'
}
for (const [kew,value] of myObject) {
    console.log(key,':-M', value);
    
}//object are not iterable like this