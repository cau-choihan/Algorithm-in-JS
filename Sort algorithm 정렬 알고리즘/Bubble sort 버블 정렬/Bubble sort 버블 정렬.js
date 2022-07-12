//1~100까지 역순으로 저장된 배열 선언
let arr = [];
for (let i = 100; i > 0; i--) {
    arr.push(i);
}
console.log(arr); //=>[100,99,98 ... 3, 2, 1]

//bubble sort method
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[j - 1] > arr[j]) {
                let temp;
                //j와 j-1 인덱스를 가진 값을 교환하기 위해 temp를 선언한다
                //보기 편하게 이곳에 선언했지만 method 상단에 temp를 선언하는게 좋다.
                temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

bubbleSort(arr);

console.log(arr); //=>[1,2,3 ... 98, 99, 100]