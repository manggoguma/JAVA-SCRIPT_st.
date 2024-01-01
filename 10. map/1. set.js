// Set
const set = new Set([1,2,3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(4));

// 순회
set.forEach(item=>console.log(item));
for(const value of set.values()){
    console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6);// 있는데 또 추가되면 무시됨
console.log(set); // set은 중복 허용 불가

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = {name:'🍎', price: 8};
const obj2 = {name:'🍌', price:5};
const objs = new Set([obj1,obj2]);
console.log(objs);

// 퀴즈
obj1.price=10;
objs.add(obj1); // 사과의 가격이 변경되고 크기는 2로 유지
console.log(objs);

// 퀴즈
const obj3={name:'🍌', price:5};
objs.add(obj3);
console.log(objs);
// obi2와 값이 같거라도 주소값이 복사되는 Shallow copy가
// 이루어지므로 set에 추가되고 크기가 3이 된다