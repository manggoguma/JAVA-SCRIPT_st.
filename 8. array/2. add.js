const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for(let i = 0; i<fruits.length;i++){
    console.log(fruits[i]);
}

// 추가, 삭제 - 좋지 않은 방식 💩💩💩💩💩💩
// const fruits = ['🍌', '🍎', '🍇', '🍑'];

fruits[4]='🍓' 
console.log(fruits); 
// 정 하고 싶으면

delete fruits[1];
console.log(fruits); 
// 결과: [ '🍌', <1 empty item>, '🍇', '🍑', '🍓' ] ; 공간은 남아있게 됨

