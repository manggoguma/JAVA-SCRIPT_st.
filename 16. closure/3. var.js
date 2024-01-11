function loop() {
    const array = [];
    // var과 let의 차이점
    // let > 0,1,2,3,4
    // var > 5,5,5,5,5 : 함수 스코프가 없고 블럭 스코프라서
    for(let i = 0; i<5;i++){
        array.push(function () {
            console.log(i);
        });
    }
    return array;
}

const array = loop();
array.forEach((func)=>func());