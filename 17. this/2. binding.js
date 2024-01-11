// this 바인딩
// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가르킴
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨
// 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨!



function Cat(name){
    this.name= name;
    this.printName = function () {
        console.log(`고양이 이름 출력해라 : ${this.name}`);
    };
}
function Dog(name) {
    this.name = name;
    this.printName = function () {
        console.log(`강아지 이름 출력해멍 : ${this.name}`);
    };
}

const cat = new Cat("냥냥")
const dog = new Dog("왈왈")
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName(); // 고양이 이름 출력해라 : 왈왈
cat.printName(); // 고양이 이름 출력해라 : 냥냥

function printOnMonitor(printName) {
    console.log('모니터를 준비하고','전달된 콜백을 실행');
    printName(); // >객체.printName이 아니기 때문에 undefined로 출력
}

printOnMonitor(cat.printName); // 고양이 이름 출력해라 : undefined