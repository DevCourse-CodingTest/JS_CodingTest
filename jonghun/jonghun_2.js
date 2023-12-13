function solution(priorities, location) {
    let q = []; //큐 역할을 할 배열
    let idx = location; //목표프로세스의 현재 위치를 담을 변수
    let front;
    let cnt = 0; //몇번째로 실행되었는지 카운트를 위한 변수
    let Max;
    for(let i=0; i<priorities.length; i++){
        q.push(priorities[i]);
    } // 큐에 priorities로 들어온 프로세스들을의 우선순위를 넣어둔다.
    
    priorities.sort((a, b) => a - b);
    Max = priorities.at(-1);
    // priorites 값을 정렬해서 최댓값을 찾아 저장한다.
    
    while(true){
        
        front = q[0]; //큐의 맨 앞을 front에 대입
        
        if(idx == 0){ //만약 목표 프로세스가 맨 앞에 있다면
            if(front>=Max){ // 우선순위가 더 높은 프로세스가 없다면
                q.shift();
                cnt++;
                break; // 목적을 이뤘으므로 루프 탈출
            }
            else{ // 아닐경우 다시 큐에 넣음
                q.shift();
                q.push(front);
                idx = q.length-1;
                
            }
        }
        else{ //만약 목표 프로세스가 맨 앞에 없다면
            if(front>=Max){ // 우선순위가 더 높은 프로세스가 없다면
                q.shift();
                idx--;
                cnt++;
                priorities.pop();
                Max = priorities.at(-1);
            }
            else{  // 아닐경우 다시 큐에 넣음
                q.shift();
                q.push(front);
                idx--;
            }
        }
    }
    
    let answer = cnt;
    return answer;
}
