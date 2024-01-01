// 주어진 배열에서 중복을 제거 하라
const fruits = new Set(['🍌', '🍎', '🍇', '🍌', '🍎', '🍑']);
//  ['🍌', '🍎', '🍇', '🍑']

console.log(fruits);
// 1) 풀이법
console.log([...new Set(fruits)]);
// 2) 풀이법
function removeDuplication(array) {
    return[...new Set(array)]
}
console.log(removeDuplication(fruits)
    );


// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

// const set3 = set1.add(set2);
// console.log('메롱',set3);
// set3.forEach(item => console.log(item));
//     for(const value of set3.values()){
//         console.log('나는',value);
//     }

function findIntersection(set1,set2) {
    const array = [...set1].filter((item)=>set2.has(item));
    return new Set(array);
}

console.log(findIntersection(set1,set2));
    
