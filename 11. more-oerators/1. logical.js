// 논리연산자 Logical Operator
// && 그리고
/// || 또는
// 단축평가 : short-circuit evaluation
const obj1 = {name : '🐶'}
const obj2 = {name : '🐈', owner : 'Ellie'};

if(obj1&&obj2){
    console.log('둘다 true!');
}
// &&는 둘다 T여야하는데, 
// obj1 T고 obj2도 T여서 마지막 obj2가 출력
let result = obj1&&obj2; 
console.log(result);

// ||는 하나만 T여도 돼서,
// obj1이 이미 T기 때문에 T가 출력
// 만약 obj1이 F였다면, obj2가 출력 됐을 것
result = obj1||obj2;
console.log(result);

// 활용 예제
// && 조건이 T일 때, 무언가를 해야할 경우
// || 조건이 F일 때, 무언가를 해야할 경우
function changeOwner(animal) {
    if(!animal.owner){
        throw new Error('주인이 없어요')
    }
    animal.owner = '바뀐 주인'
}

function makeNewOwner(animal) {
    if(animal.owner){
        throw new Error('주인이 있어요')
    }
    animal.owner = '새로운 주인'
}

obj1.owner && changeOwner(obj1); 
// F기 때문에 뒤에 것 실행 x
obj2.owner && changeOwner(obj2);
// T기 떄문에 뒤에 것 실행 o
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1); 
// F기 때문에 뒤에 것 실행 o
obj2.owner || makeNewOwner(obj2);
// T기 떄문에 뒤에 것 실행 x
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할 때
let item;// = {price:1};
// const price = item.price;
//console.log(price); 
// cannot read properties of undefined (reading 'price')
// 이럴경우, 
const price = item && item.price;
console.log(price); // undefined로 출력됨

// 기본값을 설정
// || 연산자는 값이 F인 경우 모두 설정
// 0, -0, null, undefined, ''
function print(message) {
    // 2. 기본값이 Hello가 나오도록 설정
    const text = message || 'Hello'
    console.log(text); // 3. Hello가 출력
}

print(); // 1. 메시지를 아무것도 지정 안했을 때

// 비교 Default parameter 전달하지 않거나, undefined 설정 시에만 작동
// function print(message='Hi') {
//     console.log(message); 
// }

// print();
// print(undefined);

