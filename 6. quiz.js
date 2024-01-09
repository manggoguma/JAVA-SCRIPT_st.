// 클래스를 베이스로한 객체지향 프로그래밍

class Animal{
    constructor(name,emoji){
        this.name= name;
        this.emoji = emoji;
    }
    
}

Animal.prototype.printName = function() {
    console.log(`${this.name} ${this.emoji}`);
};
/////////////////////////////////////////////////
class Dog extends Animal{
    constructor(owner){
        super();
        this.owner
    }
}



const dog1 = new Dog('멍멍','🐶','하은');
dog1.printName();