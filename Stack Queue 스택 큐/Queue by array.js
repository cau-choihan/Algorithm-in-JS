/*
queue by array
배열을 이용한 JS상의 큐 구현
*/

//init method의 생략 가능
let queue = [];

//Enqueue method => stack과 같이 push를 이용가능
queue.push(1, 2, 3, 4, 5);
console.log(queue);        //=>[1,2,3,4,5]

//Enqueue method by function
function enqueue(queue, data) {
    queue.push(data);
}
enqueue(queue, 10);
console.log(queue);//=>[1,2,3,4,5,10]

//Dequeue method
//JS의 shift method로 구현 가능 : shift method => 배열의 가장 앞의 값 리턴
console.log(queue.shift());//=>1
console.log(queue);        //=>[2,3,4,5,10]

//Dequeue method by function
function dequeue(queue) {
    return queue.shift();
}
console.log(dequeue(queue));//=>2
console.log(queue);         //=>[3,4,5,10]

//Peek method
console.log(queue[queue.length - 1]); //=>10

//Peek method by function
function Peek(queue) {
    return console.log(queue[queue.length - 1]);
}
Peek(queue);                //=>10

//Clear method
queue = [];

//Capacity method 생략가능

//Size method
console.log(queue.length) //=>0

//Size method by function
function Size(queue) {
    return console.log(queue.length);
}
Size(queue)               //=>0

//IsEmpty method
console.log(queue.length === 0);//=>true

//IsEmpty method by function
function IsEmpty(queue) {
    if (queue.length === 0) return console.log(true);
    else { return console.log(false); }
}
IsEmpty(queue);//=>true

//IsFull method 생략가능

//Search method
//case1 : linear search 선형검색
enqueue(queue, 1);
enqueue(queue, 2);
enqueue(queue, 3);
enqueue(queue, 4);
enqueue(queue, 5);
console.log(queue);//=>[1,2,3,4,5]

const key1 = 3;
const key2 = 7;
function linearSearch(queue, key) {
    for (let i = 0; i < queue.length - 1; i++) {
        if (queue[i] === key) return console.log(`queue[${i}] is ${key}`);
    }
    return console.log(false);
}

linearSearch(queue, key1);//=>queue[2] is 3
linearSearch(queue, key2);//=>false

//Terminate method 생략가능