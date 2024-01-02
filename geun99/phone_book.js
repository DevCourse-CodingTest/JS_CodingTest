// https://school.programmers.co.kr/learn/courses/30/lessons/42577
function solution(phone_book) {
    phone_book.sort(); // 번호 비교를 하기 위해 우선 정렬을 해줍니다.
    for(let i=0;i<phone_book.length-1;i++){ 
        if(phone_book[i] == phone_book[i+1].slice(0,phone_book[i].length)) // 시작부분을 비교합니다.
            return false //같으면 false 리턴
    }
    return true // 루프가 끝나도록 false가 리턴되지 않으면 true 리턴
}

