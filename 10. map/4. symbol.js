// Symbol 심벌
// 유일한 키를 생성할 수 있음
const map = new Map();
const key1 = 'key';
const key2 = 'key'; 
map.set(key1,'hello'); // 키1 값을 help 변경
console.log(map.get(key2)); // hello가 출력
// 키 값이 같아서 동일한 키로 간주
console.log(key1===key2);

const key3 = Symbol('key');
const key4 = Symbol('key'); 
map.set(key3,'hello'); 
console.log(map.get(key4));
console.log(key3===key4); // False 출력

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리(Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1===k2);

console.log(Symbol.keyFor(k1)); // key
console.log(Symbol.keyFor(key3)); // undefined
// 일반 심볼은 문자열에 대한 정보가 숨겨져 있고
// 레지스트리를 통해 만들어진 심볼에 한에서만 문자열에 대한 정보를 알 수 있다

const obj = {[k1]:'Hello',[Symbol('key')]:1} // Symbol지정해서 접근하지 못하도록
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);
// undefined ; 접근제한됐기때문에 위의 Key:1과 다른 값이다
