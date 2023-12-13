function solution(n, words) {
  // 이미 사용된 단어를 저장하기 위해
  let usedWords = {};

  for (let i = 0; i < words.length; i++) {
    // 현재 단어와 이전 단어, 현재 단어가 현재 단어가 배열의 첫 번째 단어라면 이전 단어는 없으므로 빈 문자열로 설정
    let cur = words[i];
    let pre = i > 0 ? words[i - 1] : "";

    // 현재 단어가 이미 사용되었거나, 이전 단어의 마지막 글자와 현재 단어의 첫 글자가 다르면
    if (usedWords[cur] || (i > 0 && pre[pre.length - 1] !== cur[0])) {
      // 탈락자의 번호와 차례를 계산하여 반환
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }

    // 현재 단어를 사용된 단어로 표시
    usedWords[cur] = true;
  }

  // 탈락자가 없으면 [0, 0] 반환
  return [0, 0];
}
