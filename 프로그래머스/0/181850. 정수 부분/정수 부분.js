function solution(flo) {
    var answer = 0;
    // 소수점 관련 문법
    // Math.floor() -> 더 작은 정수로 내림
    // Math.trunc() -> 소수점 부분을 잘라냄
    // parseInt() -> 정수로 변환
    
    answer = Math.trunc(flo);
    return answer;
}