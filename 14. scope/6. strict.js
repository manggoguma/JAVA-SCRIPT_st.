'use strict';

// 페이지 전체적으로, 부분적으로 사용 가능
// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임

var x = 1;
delete x ; // -> error 발생

function add(x) {
    var a = 2;
    b = a + x ; // b is not defined

}
add(1) // -> 존재하지 않은 변수를 쓰면 error 발생

const array = [1,2,3];
for(num of array){
    console.log(num);
// 오류 발생 num in not defined
// 엄격모드 실행시 for(let num of array) 제대로 선언해야 됨
}