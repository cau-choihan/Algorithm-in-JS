//1~100까지 역순으로 저장된 배열 선언
let arr = [];
for (let i = 100; i > 0; i--) {
    arr.push(i);
}
console.log(arr); //=>[100,99,98 ... 3, 2, 1]

//bubble sort method
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

bubbleSort(arr);

console.log(arr); //=>[1,2,3 ... 98, 99, 100]