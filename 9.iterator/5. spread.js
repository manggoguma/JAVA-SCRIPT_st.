// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르륵 펼쳐 질 수 있따
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018

function add (a,b,c){
    return a+b+c;
}

const nums = [1,2,3];
//console.log(add(nums[0],nums[1],nums[2]));//번거로워
console.log(add(...nums));

// Rest parameters
function sum(first,second,...nums) {
    console.log(nums);
}
sum(1,2,0,1,2,4);

// Array Concat
const fruits1=['🍍','🍇'];
const fruits2=['🍓','🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr);

arr=[...fruits1,'🍈',...fruits2]
console.log(arr);

// object
const ellie = {name : 'Ellie',age:20, home: {address:'home'}};
const updated = {
    ...ellie,
    job: 's/w engineer'
}
console.log(updated);
console.log(ellie); // 기존의 엘리의 값은 변하지 않음