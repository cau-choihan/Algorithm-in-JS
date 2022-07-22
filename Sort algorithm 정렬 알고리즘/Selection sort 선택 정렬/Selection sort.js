//1~100까지 역순으로 저장된 배열 선언
let arr = [];
for (let i = 100; i > 0; i--) {
    arr.push(i);
}
console.log(arr); //=>[100,99,98 ... 3, 2, 1]

//selection sort method
function selectionSort(arr) {
    let temp;
    //i의 범위는 0~arr.length-2 만약 arr.length-2개만큼의 요소가 정리되었다면 arr.length-1은 이미 정렬되어있다.]
    for (let i = 0; i < arr.length - 2; i++) {
        //배열에서 가장 낮은 값의 인덱스를 저장하는 변수 min선언.
        let min = i;

        //j의 범위는 0~arr.length-1이지만, <=를 통해서 마지막 배열의 요소에 접근할 수 있도록 한다.
        //또는 j < arr.length 로 표시할 수 있다.
        for (let j = i + 1; j <= arr.length - 1; j++) {
            //j가 최솟값을 검색하고, arr[min]보다 작은 값을 검색하면 해당 인덱스를 min에 저장한다.
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        //arr[min]을 arr[i]와 바꾸면 앞에서부터 최소값들 중심으로 정렬된다.
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}
selectionSort(arr)
console.log(arr); //=>[1,2,3 ... 98, 99, 100]