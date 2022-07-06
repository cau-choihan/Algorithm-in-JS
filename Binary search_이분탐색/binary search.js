//이분탐색은 재귀, 비재귀적 방법이 있는데, 비재귀적 방식을 선호함
//재귀적 방식은 콜스택을 만들어서 스택 오버프로우를 유발할 수 있다고 생각

//배열 arr을 정의
let arr = [];
//배열 arr은 1000미만의 임의의 0이상의 정수들로 구성
for (let i = 0; i < 1000; i++)arr.push(Math.floor(Math.random() * 1000));
//이분탐색을 하기위한 선행조건으로 arr배열을 오름차순(또는 내림차순)정렬함
arr.sort((a, b) => a - b);

//이분탐색법으로 n을 찾는 함수 선언, 매개변수는 찾는 수, 배열의 시작, 배열의 끝(길이)
function binarySearch(n, L, R) {
    let left = L; //배열의 가장 좌측 (0)
    let right = R - 1; //배열의 끝에 접근하기 위해 길이-1
    let middle; //배열을 이분해줄 변수
    let count = 0; //숫자를 찾기까지 걸린 분할횟수
    while (left <= right) {
        count++;
        middle = Math.floor((left + right) / 2);
        //n을 탐색한 경우
        if (arr[middle] === n) {
            return middle, count;
        }
        //arr[middle]이 n보다 큰 경우 (middle 위 숫자를 버릴 수 있음)
        else if (arr[middle] > n) {
            right = middle - 1
        }
        //arr[middle]이 n보다 작은경우 (middle 아래 숫자를 버릴 수 있음)
        else if (arr[middle] < n) {
            left = middle + 1
        }
    }
    return "cannot found"
}

console.log(arr);
console.log(binarySearch(2, 0, 1000));
console.log(binarySearch(44, 0, 1000));