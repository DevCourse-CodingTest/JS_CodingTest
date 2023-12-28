function solution(arr) {
  // 최대공약수를 계산하는 함수
  function gcd(a, b) {
    // 유클리드 호제법을 사용하여 최대공약수 계산
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // 최소공배수를 계산하는 함수
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // 배열의 모든 수의 최소공배수를 계산
  // reduce 함수를 사용해 배열의 각 요소에 대한 최소공배수 계산
  // 초기값으로는 배열의 첫 번째 요소를 사용
  let answer = arr.reduce((acc, cur) => lcm(acc, cur), arr[0]);

  return answer;
}
