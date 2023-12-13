function solution(priorities, location) {
  let answer = 0;
  let indexes = []; // 인덱스 추적하기 위한 배열

  // 각 프로세스의 초기 위치를 indexes 배열에 저장
  for (let i = 0; i < priorities.length; i++) {
    indexes.push(i);
  }

  // priorities 배열에 프로세스가 남아있는 동안 계속 반복
  while (priorities.length !== 0) {
    let max_value = Math.max(...priorities); // 현재 priorities 배열에서 가장 높은 우선순위 값을 찾음

    if (priorities[0] < max_value) {
      // 첫 번째 프로세스의 우선순위가 최대가 아닐 경우
      priorities.push(priorities.shift()); // 첫 번째 프로세스를 배열의 마지막으로 이동
      indexes.push(indexes.shift()); // 해당 프로세스의 인덱스도 마찬가지로 이동
    } else {
      // 첫 번째 프로세스의 우선순위가 최대일 경우
      answer += 1; // 실행 순서를 하나 증가
      priorities.shift(); // 첫 번째 프로세스를 배열에서 제거
      if (indexes.shift() === location) {
        // 제거된 프로세스의 인덱스가 찾고자 하는 위치와 같은 경우
        return answer; // 현재 순서를 반환
      }
    }
  }
}
