function solution(a, b) {
    var answer = 0;
    let number1 = String(a) + String(b);
    let number2 = 2 * a * b;
    
    if (Number(number1) >= number2) answer = Number(number1);
    else answer = number2;
    return answer;
}