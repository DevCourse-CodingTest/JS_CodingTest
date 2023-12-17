function solution(storey) {
    let answer = 0;
    let input = storey.toString()
    let temp = storey
    let move // 버튼 누르는 횟수
    
   for(let i = 0; i<=input.length; i++){
        move = temp % 10;
        // 6이상일 때 이동하기
        if (move > 5) {
            answer += (10 - move);
            temp += 10;
        }
        // 4이하일 때 이동하기
        else if (move < 5) {
            answer += move;
        }
        // 5일때 이동하기
        else {
            if (Math.floor(temp / 10) % 10 >= 5) { // 다음 자릿수가 5 이상이면
                temp += 10;
            }
            answer += move;
        }
        temp = Math.floor(temp / 10); // 다음 자릿수로
    }

    return answer;
}
