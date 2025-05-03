class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static createId(){       // static will not allow everyone to create ID
        return '123'
    }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone", "i@phone.com");

console.log(iPhone.createId())