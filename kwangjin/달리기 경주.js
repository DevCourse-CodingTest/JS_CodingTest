// https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
  const array = new Map(); // array란 map 객체를 생성

  players.forEach((key, value) => {
    array.set(key, value); // 요소인 key, index인 value를 array에 넣어준다.
  });

  callings.forEach((key) => {
    const currIdx = array.get(key); // array의 현재 요소를 currIdx에 저장한다.
    const front = players[currIdx - 1]; // players배열의 현재 요소 이전 요소를 front에 저장한다.

    [players[currIdx], players[currIdx - 1]] = [
      players[currIdx - 1],
      players[currIdx],
    ];
    // key, value값을 비교하여 앞과 현재 값을 교환한다.
    array.set(key, array.get(key) - 1); // 현재 요소에 front 교환
    array.set(front, array.get(key) + 1); // front에 현재 요소 교환
  });

  return players;
}
