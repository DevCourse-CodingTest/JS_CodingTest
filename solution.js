function solution(n, words) {
    let answer = [0,0]
    let wordList = [];
    
    for(let i=0;i<words.length;i++){ 
        if(words[i].length<=1){ // 한글자 단어가 나왔을 때
            answer[0]=i%n+1;
            answer[1]=Math.floor(i/n+1);
            return answer;
        }
        
        if (i>=1){
            if(words[i-1][words[i-1].length-1]!==words[i][0]){ // 끝말이 이어지지 않았을 때
                answer[0]=i%n+1;
                answer[1]=Math.floor(i/n+1);
                return answer;
            }
        }
        
        if(wordList.includes(words[i])){ // 중복 단어가 나왔을 때
            answer[0]=i%n+1;
            answer[1]=Math.floor(i/n+1);
            return answer;
        }
        wordList.push(words[i])
    }
    return answer;
}
