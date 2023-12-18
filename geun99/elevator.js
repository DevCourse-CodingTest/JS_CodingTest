function solution(storey) {
    let answer = 0;
    
    while(storey > 0){
        let num = storey % 10
        
        if (num > 5){
            answer += (10-num)
            storey +=10
        } else if(num < 5){
            answer += num
        } else{
            if(Math.floor(storey/10) % 10 > 4){
                storey +=10
            }
            answer +=num
        }
        storey = Math.floor(storey/10)        
    }
    return answer;
}
