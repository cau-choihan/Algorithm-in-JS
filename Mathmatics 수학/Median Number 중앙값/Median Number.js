let first, middle, last;
const a = first = 1;
const b = middle = 2;
const c = last = 3;

function median(a, b, c) {
    //3개의 수 중 2개의 수를 기준으로 잡음
    // a>=b라면, c의 위치에 따라 중앙값이 변함
    if (a >= b) {
        if (b >= c) {
            return b;
        }
        //a>=b이고 c>b이므로 a와 c의 대소비교로 판별해야함
        else if (c >= a) {
            return a;
        }
        //a>=b , c>b , a>c 가 누적되었으므로 중앙값은 c
        else {
            return c;
        }
    }
    //a>=b의 if가 적용되지 않았음으로 b>a 의 조건을 갖고 아래 코드로 이동함
    else if (a > c) {
        return a;
    }
    //b>a 의 조건과 c>=a 의 조건이 누적됨
    else if (c > b) {
        return b;
    }
    //b>a , c>=a, b>=c의 조건이 누적되었으므로 중앙값은 반드시 c
    else {
        return c;
    }
}
console.log(median(first, middle, last));