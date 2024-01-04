function execute() {
    console.log('1');
    setTimeout(()=>{
        console.log('2');
    },3000);
    console.log('3');
}

execute();

// 1->3->(3초 뒤)2
// 콜백 비동기