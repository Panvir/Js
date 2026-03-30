//intial value ist time ch accumaltor ch jandi then normal wwork krda a
//reduce sari array te chlega accumlator bs iko vaar lenda. initial vlaue lenda a
//return krega single value
//acculmalator act as storage for reuslts 

const myNums=[1,2,3]

// const mytotal=myNums.reduce((acc,currval)=>{
//     console.log(`${acc} and current val: ${currval}`);
    
//     return acc+currval
// },0)//0 represnt initial value for accuautlator

const mytotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal);

const shopingcart=[
    {
        itemname:"js course",
        price:3000
    },
    {
        itemname:"py course",
        price:999
    },
    {
        itemname:"cpp course",
        price:5000
    },
    
    {
        itemname:"data science course",
        price:12999
    },
]
const pricetopay=shopingcart.reduce((acc,item)=>{
    return acc+item.price
},0)
console.log(pricetopay);

