// const dog1 = {name : '망고', emoji : '🐶'}
// const dog2 = {name : '구마', emoji : '🐕'}

function Dog(name,emoji) {
    this.name = name;
    this.emoji = emoji;
    // 인스턴스 레벨의 함수
    // this.printName = ()=>{
    //     console.log(`${this.name} ${this.emoji}`);
    // } 가만 보니 데이터 낭비 같음 -> 프로토타입의 함수 만들어보자⭐⭐
}
const dog1 = new Dog('망고','🐶');
const dog2 = new Dog('구마','🐕');
console.log(dog1,dog2);

// 프로토타입 레벨의 함수 ⭐⭐ 메모리 절약
Dog.prototype.printName = function() {
    console.log(`${this.name} ${this.emoji}`);
};
console.log(dog1,dog2);
dog1.printName(); 
dog2.printName();  

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면(오버라이딩 하면)
// 프로토타입 레벨(부모)의 함수의 프로퍼티는 가려진다(섀도잉)
dog1.printName=function () {
    console.log('안녕!!');
}
dog1.printName();

// 정적 레벨
Dog.helo = () => {
    console.log('hello!');
}
// dog1.hello();-> 에러 발생
Dog.helo(); 