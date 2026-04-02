const myArr=[]
// %DebugPrint(myArr)

//continous , holey(holes hai isme) array

//SMI(Small Integer)
//Packed element
//Double (float,string,function)

const arrTwo=[1,2,3,4,5]//numbers basically not deciaml oh sbto obtimized ne
//Packed_SMI_Elements ye boht optimised hai

arrTwo.push(6.0)
//Packed_double_elements

arrTwo.push('7')
//Packed _Elemetns
//but yaad rahe agr sochre ho k mai push krk agr pop krdhuga tn davra SMi ch bnjega te optimize hojega but aise nhi hota ek baar upgrade hogya agr toh dvara downgrade nhi hunda eben after popingz

arrTwo[10]=11//but 10 pos tn sigi vini but ye chlega ye bngya hia HOLEY_ELEMENT bngya hai 
//eda optimization diff treeke nl hai 
//ab ye holey array hai
console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);//ye jo operatonn hote hia ye costly hote hai

//bound check 

//hasOwnProperty boht expensiove hai opetion
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,10)
//hasOwnProperty(Object.prototype,10)

//holes are very expensive in js

const arrThree=[1,2,3,4,5]
console.log(arrThree[2]);

//SMI highest optomised thingh hia > DOUBLE > PACKED <-shows level of optimization
//H_SMI>H_DOUBLE>H_PACKED where H is HOLEY 

const arrFour=new Array(3)//by defailt empty rkahna hi kyo c
console.log(arrFour);//Just 3 holes.Holey_SMI_ELEMENTS

arrFour[0]='1' //Holey_elements sidha downgradye hogya to packed
arrFour[1]='2' 
arrFour[2]='3' 

//btter practise
const arrFive=[]//empty hi initate krli a
arrFive.push('1')//PACKED_ELEMTNS
arrFive.push('2')//
arrFive.push('3')//

arrSix=[1,2,3,4,5]//yaha packedsmi hai good vala
arrSix.push(NaN)//ab ye packed double bngya hau 

//for,for-of.forEach----always try to use internal by default jo milde a loops oohi lgao like aaray te foreach dinde ne better ohi rehnda a so recommended hai use jo nl anda a

