// 옵셔널 체이닝 연산자 Optional Chaning Operator
// ?.
let item = {price:1};
const price = item?.price;
// item이 있니? 있으면 price에 접근하고, 없으면 접근하지마
console.log(price); 

let obj = {name:'🐶',owner:{name : '하은'}};
function printName(obj) {
    const ownerName = obj?.owner?.name;
    console.log(ownerName);
}
printName(obj)