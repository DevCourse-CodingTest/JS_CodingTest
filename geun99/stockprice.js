// https://school.programmers.co.kr/learn/courses/30/lessons/42584 

function solution(prices) {
    let answer = [];    // 정답을 담을 빈 배열 생성
    for(let i =0; i<prices.length;i++){
        let num = 0; // 배열에 넣을 수 선언
        for(let j=i+1;j<prices.length;j++){
            num++ // 배열을 순회하며 num상승
            if(prices[i]>prices[j]) // 가격이 상승하지 않았으므로 break
                break
        }
        answer.push(num) // 오른 시간을 push해준다. 
    }
    return answer; 
}
