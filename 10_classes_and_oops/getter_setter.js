class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()    //if instead of _password we use password then get or set will start a race with constructor to set password or get password and then call stack size will get exceeded
    }

    set password(value){
        this._password = value
    }
}



const Ujjwal = new User("u@ujjwal.ai", 123);
console.log(Ujjwal.password)