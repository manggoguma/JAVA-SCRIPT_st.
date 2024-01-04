function a() {
    return 1;
}

function b() {
    return a()+1;
}

function c() {
    return b() + 1;
}

const result = c();
console.log(result);


// 콜스택과 싱글쓰레드
// 자바스크립트는 ⭐동기적⭐으로 운영되기 떄문에
// 함수가 무거워지면 어플리케이션 속도에 문제가 발생