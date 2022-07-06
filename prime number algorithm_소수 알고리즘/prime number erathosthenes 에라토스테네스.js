
let i, n, count = 0;
//핵심 : 소수로 나눠지지 않으면 소수
let prime = [];
prime[0] = 2;

for (n = 3; n <= 1000; n += 2) {
    for (i = 0; i <= prime.length; i++) {
        if (n % prime[i] === 0) break;//소수가 아니면 break
        if (i === prime.length) {
            prime.push(n);
            break;
            /*
            break를 넣어주는 것 아주 중요함. prime(push(n))이후, prime.length가 1 증가하고, i가 1 증가하여 무한반복됨
            또는 prime.length대신 prime배열의 개수를 담은 변수를 저장하는것도 대체 가능함
            ->index를 통해 prime[]내 순서를 지정하는 변수를 새로 선언하는 것도 좋은 방법
            */
        }
    }
}
console.log(prime);