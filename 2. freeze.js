// 동결! Object.freeze
// 추가❌, 삭제❌, 쓰기❌, 속성 재정의❌
// 단, 얕은 꽁꽁 얼림(참조하는 객체까지는 얼려지지 않음)

const haeun = {name : '하은'};
const dog = { name : '망고', emoji: '🐶', owner: haeun };
Object.freeze(dog);
dog.name = '할망고';
console.log(dog);
// 강아지 이름이 할망고로 바뀌지 않았다 -> 동결됐기 때문
dog.age = 8;
console.log(dog);
// 강아지 나이가 추가되지 않았다 -> 동결됐기 때문
delete dog.name;
console.log(dog);
// 삭제 되지 않았다> 동결됐기 때문

haeun.name = '주현'; // { name: '망고', emoji: '🐶', owner: { name: '주현' } }
console.log(dog);
// 참조값까지 동결하지는 못한다

// 밀봉! Object.seal
// 값의 수정⭕, 키 추가 ❌, 삭제 ❌, 속성 재정의❌
const cat = {}; 
// = const cat = {...dog};
Object.assign(cat,dog) // dog에 있는 프로퍼티를 복사
Object.seal(cat);
console.log(cat);
cat.name = "냐옹";
console.log(cat);
// { name: '냐옹', emoji: '🐶', owner: { name: '주현' } } 바뀜!!
delete cat.emoji;
console.log(cat);
// { name: '냐옹', emoji: '🐶', owner: { name: '주현' } } 삭제는 안됨

// 동결되었는지, 밀봉되었는지 확인
console.log(Object.isFrozen(dog));
console.log(Object.isSealed(dog));


// 확장 금지 preventExtensions
// 추가 ❌
const tiger = {name : '어흥'};
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name= '어흐흥'
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age=1;
console.log(tiger); // ❌