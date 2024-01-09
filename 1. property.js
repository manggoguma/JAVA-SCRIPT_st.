const dog = { name : '와우', emoji : '🐶'};

console.log(Object.keys(dog)); // [ 'name', 'emoji' ]
console.log(Object.values(dog)); // [ '와우', '🐶' ]
console.log(Object.entries(dog)); // [ [ 'name', '와우' ], [ 'emoji', '🐶' ] ]

// dog라는 객체에 name이라는 키가 있니? -> True
console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);
// {
//  name: { value: '와우', writable: true, enumerable: true, configurable: true },
//  emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
//  }

const desc = Object.getOwnPropertyDescriptor(dog,'name')
console.log(desc);

// 객체 값 바꾸기
Object.defineProperty(dog,'name',{
    value : '멍멍',
    writable : false,
    enumerable : false, // 열거 안됨
    configurable : false, // 키 설정 안됨
});
    
console.log(dog.name);

const student = {};
Object.defineProperties(student,{
    firstName : {
        value : '영희',
        writable : true,
        enumerable : true,
        configurable : true,
    },
    lastName : {
        value : '김',
        writable : true,
        enumerable : true,
        configurable : true,        
    },
    fullName : {
      get(){
        return `${lastName} ${firstName}`;
      },
      set(name){
        [this.lastName, this.firstName] = name.split(' ');
      },
      configurable : true,  
    },
});

console.log(student);