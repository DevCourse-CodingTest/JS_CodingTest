function solution(n, words) {
    let answer = [];
    let pre, current; //pre는 이전 단어를 저장하고, current는 현재 단어를 저장한다.
    let history = []; //history 여태까지 나온 단어들을 저장한다.
    
    pre = words[0];
    history.push(words[0]);
    //첫번째 단어는 따로 저장한다.
    
    if(pre.length == 1){
        answer.push(1);
        answer.push(1);
        return answer;
    } // 첫번째 단어가 한글자인지 아닌지 검증한다.
    
    
    for(let i=1; i<words.length; i++){
        current = words[i];

        /*
        // 앞선 단어의 끝 글자와 현재 단어의 첫글자가 같지 않다. OR
        // 이미 나온단어이다. OR
        // 현재 단어의 길이가 1이다. 이 3가지 조건중 하나라도 해당되면
        // 조건문에 걸리게 된다.
        */
        if((pre.substr(-1) != current.substr(0,1)) || (history.includes(words[i]))
          || (current.length == 1)){
            answer.push(i%n + 1); // i에 따라 순서를 answer에 저장한다
            answer.push(Math.floor(i/n) + 1); //i에 따라 회차를 answer에 저장한다.
            return answer;
        }
        history.push(words[i]); //매번 끝날때마다 history에 단어를 저장한다.
        pre = current; //pre를 현재 단어로 교체해준다.
        
    }
    
    answer.push(0);
    answer.push(0);
    
    return answer; //for문 에서 return이 일어나지 않으면 [0,0]을 반환한다.
}
