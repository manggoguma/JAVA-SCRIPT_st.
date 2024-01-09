// var의 특징 (💩💩)
// -> 일반 코딩 방식과 어긋나서 개발하면서도 멘붕이 옴
// -> 코드의 가독성과 유지 보수성에 좋지 않음

// 1. 변수 선언하는 키워드 없이 선언 & 할당이 가능함
// 선언인지, 재할당인지 구분하기 어려움
somethimg = '💩';
console.log(somethimg);

// 2. 중복 선언이 가능함
var poo = '💩';
var poo = '🤮'
console.log(poo); // 💩🤮🤮

// 3. 블럭 레벨 (스코프) 안됨❌
var apple = '사과';
{
    var apple = '🍎';
}
console.log(apple); 
// let 사용시 '사과'가 출력 되었을 거 var 사용하면 🍎이 출력

// 4. 함수 레벨 스코프만 지원됨
function example() {
    var dog = '🐕'
}
console.log(dog); // 에러 발생

// 결론 ⭐var 쓰지 마세요!!⭐