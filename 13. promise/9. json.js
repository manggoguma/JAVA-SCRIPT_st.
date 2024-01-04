// JSON : JavaSCript Object Notation
// 서버와 클라이언드(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object) : JSON
// parse(JSON) : object

const ellie = {
    name : 'ellie',
    age : 20 ,
    eat : ()=>{
        console.log('eat');
    },
}

// 직렬화 Serializing : 객체를 문자열로 변환
const json = JSON.stringify(ellie);
// 역직렬화 Deserializing : 분다열 데ㅣ터를 자바스크립트 객체로 변환
const object = JSON.parse(json);

console.log(ellie);
console.log(json); // 문자열로 변환 , 
                // Json을 이용해서 ellie라는 데이터를 서버로 보낼 수 있게 됨
console.log(object); // object로 다시 변환
