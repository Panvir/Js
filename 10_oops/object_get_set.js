//ye get set using objects  ye rare od rarest syntax ha jo companies rarelty ise kreti ahi
const User={
    _email:"hc@gc.com",
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }
}
const tea= Object.create(User)
tea.email="tit" //becasue Getter/setter are accessed like properties, not called like functions
console.log(tea.email);
