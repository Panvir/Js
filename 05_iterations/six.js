// const coding=["js","ruby","pythin","cpp"]

// const values=coding.forEach((item)=>{//it does not return anything for each looop
    // console.log(item);
    // return item
// })
// console.log(values);


const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=>{ 
//     return num>4
// })//filter returns tge values also
// console.log(newNums);

//but huim ye same cheej for each ch use krni chand e agr 
// const newNums=[]
// myNums.forEach((nums)=>{
//     if(nums>4){
//         newNums.push(nums)
//     }
// })
// console.log(newNums);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }
];

// const userBooks=books.filter((bk)=> bk.genre==='History') yaha hisyory bok ayei
//filter filtr kdega in the basis of anything jo v given kruge ohnu
const userBooks=books.filter((bk)=>{ 
    return bk.publish>= 2000 && bk.genre==="History"
})
console.log(userBooks);



