// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열은 반환하는지
const fruits = ['🍌', '🍎', '🍋'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); 

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍋')); 


// 배열 안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍓'));

// 추가 - 제일 뒤 !push! 
fruits.push('🍈'); // 배열 자체를 변경
console.log(fruits);

// 추가 - 제일 앞 !unshift!
fruits.unshift('🍍');
console.log(fruits);

// 제거 - 제일 뒤 !pop!
let lastItme = fruits.pop();
console.log(fruits);
console.log(lastItme);

// 제거 - 제일 앞
let lastItem = fruits.shift();
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
const deleted= fruits.splice(1,1) // 1에서 시작해서 1개를 삭제 즉, 🍎가 제거
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(deleted);

fruits.splice(1,0,'❤️') // 1에서 시작해서 0개 삭제후 ❤️를 추가
console.log(fruits);

// 잘라진 새로운 배열을 만듦
let newArr = fruits.slice(0,2);
console.log(newArr);
console.log(fruits);

// 여러개의 배열을 붙여줌
const arr1= [1,2,3];
const arr2= [4,5,6];
const arr3= arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
    [1,2,3],
    [4,[5,6]],
];
console.log(arr);
console.log(arr.flat());// 기본 1단계 flat
console.log(arr.flat(2));
arr= arr.flat(3);

// 특정합 값으로 배열을 채우기
// fill은 배열 자체를 수정
arr.fill(7); // 처음부터 끝까지 7로 채워
console.log(arr);

arr.fill('😒',1,3); // 😒를 1자리부터 3-1까지 채운다 
console.log(arr);

// 배열을 문자열로 합치기
let text = arr.join(); // 기본 ,로 변환
console.log(text);

let text1 = arr.join(' | '); // 
console.log(text1);