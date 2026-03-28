//Immediately Invoked Function Expression(IIFE)

(function chai(){//ye named iife hai
    console.log(`DB connected`);
    
})(); //focus on parenthesis
// (/*funtion defination */)(/*yaha call horeya */) //aise immedialty execute hojayega,global scope k polluton nu problem hoti ha so uski htane k liye iki zzrorat pdhegi

((name)=>{//ye un named hai iffe
    console.log(`Db conect twoo ${name}`);
    
})("hitesh");//ye  kyuni chlra ? kyuki contect dkehna kaha hai  so use semicolor lgata chaiye
//humne dusre ma prentheis ch arigument pass krna hunda te parament th fucntion ch hi hunda a directly
