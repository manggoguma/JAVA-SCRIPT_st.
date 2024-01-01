// Nullish Coalescing Operator
// ??
// null, undefined인 경우에만 할당하고 싶을 때
// || > Falshy한 경우 설정(할당) 0, -0, ''
let num ='';
console.log(num || '-1' ); // -1이 출력
console.log(num ?? '-1' ); // ' '이 출력

// ||를 쓰게되면 내가 '공백'을 출력하고 싶을 때
// 잘못된 것을 출력하게 될 수 있다

