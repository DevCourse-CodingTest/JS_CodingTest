// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  // n= 사람 인원 수, words = 단어 배열
  for (let i = 1; i < words.length; i++) {
    // 끝말잇기이기 떄문에 첫번째 값은 볼 필요가 없다. 때문에 1부터 마지막 요소까지 반복문을 돈다.
    if (
      words[i][0] != words[i - 1][words[i - 1].length - 1] || // 두번째 단어의 첫번째 알파벳이 첫번째 단어의 마지막 단어와 같지 않거나,
      words.slice(0, i).includes(words[i]) // 0번째부터 i-1까지의 단어 중(내가 아닌 이전의 단어) 현재의 단어(words[i])를 포함한다면
    ) {
      return [(i % n) + 1, Math.floor(i / n) + 1]; // [(위 조건에 맞는 i값 % 인원수)+1, (i/n)(소수점 버리기) +1]번째를 return한다.
    }
  }
  return [0, 0]; // 만약 위 조건에 해당하지 않는다면 [0,0]을 return 한다.
}
