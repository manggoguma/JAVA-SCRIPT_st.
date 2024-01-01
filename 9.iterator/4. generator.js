// const multiple = {
//     [Symbol.iterator]:()=>{
//         const max = 10;
//         let num =0;
//         return{
//             next(){
//                 return{value: num++*2,done: num>max};
//             }
//         }
//     },
// };

function* multipleGenerator(){
    for(let i = 0 ; i <10; i++){
        yield i **2;
    }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value,next.done);

// multiple.return(); // 끝내는 것

multiple.throw('Error!');