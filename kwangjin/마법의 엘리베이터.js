function solution(storey) {
  const splitNum = storey
    .toString()
    .split("")
    .map((e) => Number(e)); // storey의 자리수를 배열로 하나씩 쪼갠다
  let result = [];
  for (let i = splitNum.length - 1; i >= 0; i--) {
    if (splitNum[i] >= 6) {
      // 6보다 크거나 같을때
      result.push(10 - splitNum[i]); // 올림을 하여 남은 수만큼 result에 push
      splitNum[i - 1]++; // 올림하였기에 앞자리를 수를 하나 올린다.
      splitNum.pop(); // 끝자리 수를 없앤다
    } else if (splitNum[i] == 5) {
      // 5일때
      result.push(5); // 5를 push하고
      splitNum.pop(); // 없앤다.
    } else {
      result.push(splitNum[i]); // 내림으로 수만큼 push한다.
      splitNum.pop();
    }
  }
  return result.reduce((a, c) => a + c); // result안의 배열 값들을 모두 더한 값을 리턴한다.
}
