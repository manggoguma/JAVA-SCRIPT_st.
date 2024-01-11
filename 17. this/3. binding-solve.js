
function Cat(name){
    this.name= name;
    this.printName = function () {
        console.log(`고양이 이름 출력해라 : ${this.name}`);
    };
    // 🦖1. bind 함수를 이용해서 수동적으로 바인딩 해주기
    // 객체가 만들어지는 시점에 객체와 함수가 바인딩 됨
    this.printName = this.printName.bind(this);

    // 🕷️2. arrow 함수로 바꾸기 : arrow 함수는 렉시컬 환경에서의 this를 기억
    // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가르킴
    // this.printName =  ()=> {
    //     console.log(`고양이 이름 출력해라 : ${this.name}`);
    // };
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