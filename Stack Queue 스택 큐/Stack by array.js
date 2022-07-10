/*
stack by array
배열을 이용한 JS상의 스택 구현
*/

//init method의 생략 가능
let stack = [];

//push, pop method
//기존의 push와 pop method로 구현 가능
stack.push('hello');
console.log(stack);      //=>[ 'hello' ] 
stack.push('world');
console.log(stack);      //=>[ 'hello', 'world' ]
console.log(stack.pop());//=> world

//Peek method
stack = [];
stack.push(1, 2, 3, 4, 5);
console.log(stack);                 //=> [1,2,3,4,5]
console.log(stack[stack.length - 1])//=> 5

//Peek method by function
function Peek(stack) {
    return console.log(stack[stack.length - 1]);
}
Peek(stack);                        //=> 5

//Clear method
stack = [];

//Capacity method 생략 가능

//Size method
console.log(stack.length);//=>0

//Size method by function
function size(stack) {
    return console.log(stack.length);
}
size(stack);              //=>0

//IsEmpty method
console.log(stack.length == 0)//=>true

//IsEmpty method by function
function IsEmpty(stack) {
    if (stack.length === 0) return true;
    else return false;
}
console.log(IsEmpty(stack));//=>true

//IsFull method 생략 가능

//Search method
//case1 : linear search 선형 검색
stack.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
const key1 = 5;
const key2 = 11;
function linearSearch(stack, key) {
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] === key) return console.log(`stack[${i}] is ${key}`);
    }
    return console.log(false);
}
linearSearch(stack, key1);//=>stack[5] is 5
linearSearch(stack, key2);//=>false

//Print method
console.log(stack);//=>[0,1,2,3,4,5,6,7,8,9]

//Print method by function
function Print(stack) {
    console.log(stack);
}
Print(stack);//=>[0,1,2,3,4,5,6,7,8,9]

//Terminate method 생략가능