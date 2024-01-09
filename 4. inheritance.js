// 프로토타입을 객체지향 프로그래밍

function Animal(name,emoji) {
    this.name = name;
    this.emoji = emoji;}

 Animal.prototype.printName = function() {
     console.log(`${this.name} ${this.emoji}`);
};

//////////////////////////////////////
function Dog(name,emoji,owner) {
    // super(name,emoji)
    Animal.call(this,name,emoji)
    this.owner = owner;
}
// Dog.prototype = Object.create(Object.prototype)
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.play = () =>{
    console.log('같이 놀자용!');
}
const dog1 = new Dog('멍멍','🐶','하은');
dog1.play();
dog1.printName();

////////////////////////////////////////////////////
function Tiger(name,emoji) {
    Animal.call(this,name,emoji);
}

Tiger.prototype=Object.create(Animal.prototype);
Tiger.prototype.hunt = ()=>{
    console.log("사냥하자...🤤🐇");
}

const tiger1 = new Tiger('어흥','🐯');
tiger1.hunt();
tiger1.printName();


// ⭐ 프로토타입은 복잡하기 때문에 주로 클래스로 구현한다

// 누구의 인스턴스인지 확인하는 방법
console.log(dog1 instanceof Dog); // T
console.log(dog1 instanceof Animal); // T
console.log(dog1 instanceof Tiger); // F


