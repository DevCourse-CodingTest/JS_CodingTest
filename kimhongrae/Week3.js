function solution(storey) {
  let answer = 0;

  while (storey !== 0) {
    let remain = storey % 10; // 현재 자릿수 추출
    storey = Math.floor(storey / 10); // 다음 자릿수로 이동

    if (remain < 5) {
      // 현재 자릿수가 5보다 작으면 해당 값을 그대로 추가
      answer += remain;
    } else if (remain > 5) {
      // 현재 자릿수가 5보다 크면, 10에서 뺀 값을 사용하고 다음 자릿수 증가
      answer += 10 - remain;
      storey++;
    } else if (remain === 5) {
      // 현재 자릿수가 5이면, 5를 추가하고 다음 자릿수가 5 이상이면 증가
      answer += 5;
      if (storey % 10 >= 5) {
        storey++;
      }
    }
  }

  return answer;
}
