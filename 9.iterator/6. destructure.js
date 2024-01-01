// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
const fruits = [ '🍍', '🍈', '🍓', '🍌' ];
const [first,second,...others]=fruits;

console.log(first);
console.log(second);
console.log(others);

const point = [1,2];
const [x,y,z=7] = point;
console.log(x);
console.log(y);
console.log(z); // point 배열 안에 값이 있으면 배열값이 출력됨

function creatEmoji() {
    return['apple','🍎'];
}
const[title,emoji]= creatEmoji();
console.log(emoji);

const ellie = {name : 'elie', age : 20, job : 's/w engineer'};
function display({name,age,job}) {
    console.log('이름', name);
    console.log('나이',age);
    console.log('직업',job);
}
display(ellie);

const{name,age,job : occupation ,pet='MANGGo'}= ellie; 
// 바꾸고 싶은 키워드에 : 이용해서 쓸 수 있다
console.log(name);
console.log(age);
// console.log(job);
console.log(pet);
console.log(occupation);