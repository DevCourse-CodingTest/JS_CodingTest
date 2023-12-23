// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s){
    let answer = true;

    let st = []; // stack 역할을 해줄 배열
    
    for(let i = 0; i<s.length; i++){
        if(s.charAt(i) == '('){// 문자열이 ( 일경우 스택에 집어넣는다.
            st.push(s.charAt(i));
        }
        else if(st.length == 0){ // 스택이 텅 비면 올바르지 않은 괄호이므로 false를 답으로하고 루프를 깬다.
            answer = false;
            break;
        }
        else{
            st.pop(); // 스택이 비어있지 않고 문자열이 ) 일 경우 스택에서 하나를 pop 한다.
        }
    }
    if(st.length) //모든 과정이 끝났는데도 스택에 괄호가 남아있으면 false 이다.
        answer = false;

    return answer;
}
