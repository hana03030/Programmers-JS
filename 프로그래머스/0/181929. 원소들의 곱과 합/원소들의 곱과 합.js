function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let z = 1;
    for (let i=0; i<num_list.length; i++) {
        sum += num_list[i];
        z *= num_list[i];
    }
    if ((sum*sum) > z) answer = 1;
    else answer = 0;
    return answer;
}