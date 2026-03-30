const coding=["js","ruby","pythin","cpp"]

coding.forEach( function (val) {
    // console.log(val);
    
} ) //for ech takes call back fn so we initaied fn but there should be no name for that so tale anything like item it will aitomariclaly takes elemtns deom coding array

coding.forEach((item)=>{
    // console.log(item);
    
})

function printMe(item)
{
    // console.log(item); 
}
// coding.forEach(printMe); //hum yaha printMe() aise isliye nhi likhre kyiki hum reference pass kre hai na k execute kre hau func ko

coding.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);
    
} )

const mycoding=[
    {
        langaueename:"javascropt",
        languagefile:"js"
    },
    {
        langaueename:"python",
        languagefile:"js"
    },
    {
        langaueename:"cpp",
        languagefile:"js"
    },
]

mycoding.forEach((item)=>{

    console.log(item.langaueename);
    
})