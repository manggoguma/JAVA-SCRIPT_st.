// 프로토타입을 객체지향 프로그래밍

function Animal(name,emoji) {
    this.name = name;
    this.emoji = emoji;}

 Animal.prototype.printName = function() {
     console.log(`${this.name} ${this.emoji}`);
};

function Dog(name,emoji,owner) {
    
}

Dog.prototype.play = () =>{
    console.log('같이 놀자용!');
}

const dog1 = new Dog('멍멍','🐶','하은');

