class User{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    //vaise agr dkeheya jaye email and _email alg alag cheeja ne but _email ik tra da private bngua a joke hettr setter nl hi work krega
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }


    //gettr setter alread exist kre hunde class ch but aggr gettr define krta tn setter v define krna hi pyega
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value//humne passowrd da vairable i bdlta
    }
}
//gettr hunda hia jdo class de abhr to get krni hai value, so setter bhi oda i hai
// problem hai constrctor bhi set krea and getter setter bhi kreha a oh race hojandi a so maximim call stack reach hojand aa
const hitesh=new User("Hitesh ji ","abc")
console.log(hitesh.password);//ye work krgya pr eh work kida krgya _password nl  kyoki ctor nu overide kreha gtter setter means jdo instance create kreaa a tdo passwo4e di balue sey nhi kreya ctor getter setter ape kre ne
console.log(hitesh.email);
