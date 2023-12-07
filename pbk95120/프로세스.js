function solution(priorities, location) {
  let ans = 0;

  while (1) {
    const v = priorities.shift(); //배열의 맨 앞 요소

    // 대기 중인 프로세스 중 우선순위가 더 높은 것이 있는지 확인
    if (priorities.some((current) => v < current)) {
      // 대기 중인 프로세스 중 우선순위가 더 높은 것이 있으면 맨 뒤로 이동 및 위치 변경
      priorities.push(v);
      location = location === 0 ? priorities.length - 1 : location - 1;
      continue;
    }

    // 찾고 있는 프로세스 중 우선순위가 더 높은 것이 없는 경우 ans+1
    ans += 1;

    // 답 반환
    if (location === 0) {
      return ans;
    }

    // 위치 변경
    location = location === 0 ? priorities.length - 1 : location - 1;
  }
}
