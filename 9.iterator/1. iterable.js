// Iterable 하다는 건 ! 순회가 가능하다는 것!
// [Symbol.ilterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다라는 걸 알 수 있음
// 순회 가능하면 무엇을 할 수 있나? for..of, spread
const array = [1,2,3];
for(const item of array){
    console.log(item);
}

const obj = {0:1, 1:2};
for (const item in obj){ // for...in//key를 출력
    console.log(item);
}

const iterator = array.values();
// for(const item of iterator){
//     console.log(item);
// } // or iterator.next();
// console.log(iterator.next());

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);

while(true){
    const item = iterator.next();
    if(item.done) break;
    console.log(item.value);
}