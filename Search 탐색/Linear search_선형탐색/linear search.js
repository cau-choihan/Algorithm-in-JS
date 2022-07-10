//배열을 선언하고 배열의 처음부터 끝까지 target을 찾음
let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(i);
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === target) return console.log(`arr[${i}] is ${target}`);
    }
    return console.log(false);
}

linearSearch(arr, 20); //=>arr[20] is 20
console.log(arr[20]);  //=>20
linearSearch(arr, 100);//=>false
linearSearch(arr, 200);//=>false