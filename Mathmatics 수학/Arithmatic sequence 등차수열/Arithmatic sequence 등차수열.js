/*
가우스 덧셈에서 시작한 생각
짝수의 합들, 홀수의 합들도 구할 수 있지 않을까?
짝수 홀수가 아닌 수들의 합도 구하고자 함 => 등차수열의 합 공식을 알아보기로함

n개의 수의 합 수열 Sn이 있다고 가정하고 공차는 d로 한다.
Sn수열의 첫번째 값 a1의 값은 a로 한다.
그렇다면 a2의 값은 공차가 d이므로 a+d가 된다.
일반식으로 바꾸면 an의 값은 a+(n-1)d이다.

보기쉽게 정리하면
a1 = a
a2 = a+d
a3 = a+2d
    ...
an-1 = a+(n-2)d
an = a+(n-1)d이다.
Sn수열의 합에 가우스덧셈을 활용가능하다.
a는 n개있으므로 a*n이다.
d는 1 ~ n-1개까지 있으므로 (n-1)n/2개이다.
즉 Sn수열은 a*n + n(n-1)/2d이다.
정리하면 n(2a + (n-1)d)/2 이다.
*/
let sum = 0;
for (let i = 7; i <= 700; i += 7) {
    sum += i;
}
console.log(`${sum} == ${100 * (2 * 7 + 99 * 7) / 2}`)

/*
위와같은 예시로 등차수열의 합을 구하는 함수를 제작한다.
필요한 값은 초항, 수열의 길이, 공차이다.
1. function ArithmaticSequence(초항, 수열의 길이, 공차)
2. function ArithmaticSequence(arr[0], arr.length, arr[1]-arr[0] 또는 직접 입력)
Sn 수열의 합은 arr.length*(2*arr[0] + (arr.length-1)*(arr[1]-arr[0]))/2 이다.
*/
function ArithmaticSequence(a, n, d) {
    return n * (2 * a + (n - 1) * d) / 2;
}
//위의 등차수열을 적용한다.
console.log(ArithmaticSequence(7, 100, 7));

//음수테스트를 해본다.
//시작 수는 -8, 50개의 길이로 설정, 수는 -4씩 감소한다.
sum = 0;
for (let i = -8; i >= -400; i -= 4) {
    sum += i;
}
console.log(`${sum} == ${ArithmaticSequence(-8, 99, -4)}`);
//음수도 적용가능하다.
//0이 포함된 경우도 가능하다.

//참고사항 : (수열의 길이는 마지막값-초항)을 공차로 나누고 초항값인 1을 더하여 일반식으로 구할 수 있음