//https://school.programmers.co.kr/learn/courses/30/lessons/118667?language=javascript

// 연결리스트로 구성된 큐 그냥 배열로 만든 큐는 시간초과가 나서 도입
// 출처 : https://aiday.tistory.com/125
class Queue {
  constructor() {
    this.storage = new Object();
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  push(element) {
    this.storage[this.rear] = element;
    this.rear++;
  }

  shift() {
    let removed = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;

    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }

    return removed;
  }
}


function solution(queue1, queue2) {

    let length = queue1.length;
    
    let [sum1, sum2] = [0, 0];
    let q1 = new Queue();
    let q2 = new Queue();

  //큐의 합 구하기, 연결리스트 큐에 push 하기
    queue1.forEach((value) => {
        sum1 += value;
        q1.push(value);
    });
    queue2.forEach((value) => {
        sum2 += value;
        q2.push(value);
    });
    

    
    let cnt = 0;
    while(true) { // 횟수가 전체 길이의 3배를 넘으면 정답이 없다고 보고 루프 탈출
        if( cnt > 3*length) {
            cnt = -1;
            break;
        }

      // 두 큐의 합에 따라 값 이동
        if(sum1 > sum2) {
            let temp = q1.shift();
            q2.push(temp);
            sum1 -= temp;
            sum2 += temp;
            cnt += 1;
        } else if(sum1 < sum2) {
            let temp = q2.shift();
            q1.push(temp);
            sum2 -= temp;
            sum1 += temp;
            cnt += 1;
        } else {
            break;
        }
    }
    return cnt; 
}
