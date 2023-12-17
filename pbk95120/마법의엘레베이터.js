function solution(storey) {
  let ans = 0;

  //숫자 배열로
  const arr = Array.from(storey.toString()).map(Number);

  //뒤에서 부터 시작
  for (let i = arr.length - 1; i >= 1; i--) {
    //5보다 크면 더하기
    if (arr[i] > 5) {
      ans += 10 - arr[i];
      arr[i - 1] += 1;
    }

    //현재값 5인경우 다음값 기준으로 비교
    else if (arr[i] === 5 && arr[i - 1] >= 5) {
      ans += 5;
      arr[i - 1] += 1;
    }

    //5보다 작으면 빼주기
    else {
      ans += arr[i];
    }
  }

  //arr[0]은 따로 더해줌 11인 이유는 7 -> 8 -> 9 -> 10 - > 0 한번더 필요함
  arr[0] > 5 ? (ans += 11 - arr[0]) : (ans += arr[0]);

  return ans;
}
