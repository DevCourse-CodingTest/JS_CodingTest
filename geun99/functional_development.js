// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
    let answer = [];
    let days = progresses.map((v,i)=> Math.ceil((100-v) / speeds[i]));
    // 작업에 걸리는 날을 저장하는 배열을 map을 통해 생성
    
    for(let i=0; i<days.length-1;i++){
        if(days[i+1] < days[i]){
            days[i+1] = days[i]
        }
    }
    // 이전일이 끝나지않았으면 다음 일도 지연되므로, 이전 일보다 작으면 그 일과 같게 만들어준다.
    let day=1;
    for(let i=1;i<days.length;i++){
        if (days[i]!=days[i-1]){
            answer.push(day)
            day=1
        } else{
            day++
        }
    }
    // 각 배포마다 몇개의 기능이 배포되는지 알려주는 배열을 만들어준다.
    answer.push(day)
    return answer
}
