//불규칙 배열 선언
let arr = [];
arr.push(2, 1, 3, 4, 5);
console.log(arr); //=>[2,1,3,4,5]

//bubble sort method
function bubbleSort(arr) {
    /*
    버블정렬은 정렬된 배열에 정렬을 시켜도 교환작업만 이뤄지지 않을뿐 비교작업은 계속 하게됨.
    즉 버블정렬은 정렬이 완료된 후에도 반복문에 주어진 작업량만큼 비교를 계속 실행하게됨.
    이때, 한번의 정렬마다, 비교만 이뤄졌는지, 교환도 이뤄졌는지 확인해주는 breakPoint를 선언하여 최적화가 가능함.
    */
    let breakPoint = 0;
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                breakPoint++;
            }
        }
        if (breakPoint === 0) break;
        //다음과 같은 조건을 추가하면 교환이 실행되지 않았을 떄(남은 정렬이 정렬되어있는 수 인 경우)즉시 정렬을 중단한다.
    }
}
bubbleSort(arr);

console.log(arr); //=>[1,2,3 ... 98, 99, 100]