function solution(people, limit) {
  let ans = 0;

  people.sort((a, b) => a - b);
  while (people.length > 0) {
    //가장 무거운사람
    let p = people.pop();

    //가장 가벼운사람 + 무거운사람 <= limit이면 둘다 빼줌
    if (p + people[0] <= limit) {
      people.shift();
      ans += 1;
    }
    //가장 무거운사람이 보트보다 작은경우 혼자만 빼줌
    else if (p <= limit) {
      ans += 1;
    }
  }
  return ans;
}
