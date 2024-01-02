let count = 0;

// export default는 딱 하나만 할 수 있고
// 여러 개 하려면 export만 쓸 수 있다
// 이 경우 import {} from '    '로 해야 됨 

export function increase() {
    count++;
    console.log(count);
}

export function getCount() {
    return count;
}