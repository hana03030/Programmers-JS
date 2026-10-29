function solution(a, b) {
    var answer = 0;
    let numberA = String(a)+String(b);
    let numberB = String(b)+String(a);
    if (Number(numberA) > Number(numberB)) answer = Number(numberA);
    else answer = Number(numberB);
    return answer;
}