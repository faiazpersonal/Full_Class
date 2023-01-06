// Inheritence , ===========================================================================================

class Bike {
    constructor() {
        this.company = "Honda";
    }
}

class Car extends Bike {
    constructor (name, price) {
        super()
        this.name = name;
        this.price = price;
    }
}
var v = new Car("Hornet","250000");
document.write(v.company+" "+v.name+" " +v.price);




class User {
    constructor(username,email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    static countUser() {
        console.log('Ther are 50 user');
    }
    register() {
        console.log(this.username+'is now registered');
    }
}

class Member extends User {
    constructor(username,email,password,memberPackage) {
        super(username,email,password); 
        this.package = memberPackage;
    }
    getPackage() {
        console.log(this.username+'is subscribed to the '+this.package+'package');
    }
}
let john = new Member('John','njfaiaz@gmail.com','123','Standard');
john.register();
john.getPackage();









class Pser {
    #password;
    constructor(name,username,password) {
        this.name = name;
        this.username = username;
        this.#password = password;
    }
    login(username,password){
        if(username == this.username && password == this.#password) {
            console.log('Login SuccessFully');
        }
        else{
            console.log('Authentication Faild');
        }
    }
    setPassword(newPassword) {
        this.#password = newPassword;
    }
}
let faiaz = new Pser('Faiaz', 'nj','1234');
let js = new Pser('java','js','1234');
document.write(faiaz.name);
faiaz.setPassword("12345");
faiaz.login('nj',"12345");