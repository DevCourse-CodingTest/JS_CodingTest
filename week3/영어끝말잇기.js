function solution(n, words) {
  const already = []; //전에 언급된 단어
  let pre = words[0][0]; // 첫번째 단어의 첫번쨰 글자
  const ans = []; // 답 제출

  for (let i = 0; i < words.length; i++) {
    // 1. 이미 언급된 단어인 경우, 2. 단어의 길이가 1인경우, 3. 단어의 첫글자와 이전 단어의 마지막 글자가 다른경우
    if (
      already.includes(words[i]) ||
      words[i].length === 1 ||
      words[i][0] !== pre
    ) {
      ans.push((i % n) + 1); // 탈락하는 사람의 번호
      ans.push(Math.ceil((i + 1) / n)); // 단어의 탈락 차례
      break;
    } else {
      already.push(words[i]); // 통과 한 경우 push
      pre = words[i][words[i].length - 1]; // 단어의 마지막 알파벳 pre에 저장
    }
  }

  if (ans.length === 0) {
    return [0, 0];
  } // 답이 없는경우 [0,0] return
  else {
    return ans;
  } // 답이 있는경우 답 return
}
