function solution(priorities, location) {
    let answer = 0;
    let loc=[]
    
    for(let i=0;i<priorities.length;i++)
        loc.push(i)
    
    while(priorities.length != 0){
        let max_value = Math.max(...priorities);
        if(priorities[0] >= max_value){ 
            answer+=1;
            priorities.shift();
            if(loc.shift() == location)
                return answer;
        }else {
            let temp1 = priorities.shift()
            priorities.push(temp1);
            let temp2 = loc.shift()
            loc.push(temp2);
        }
    }
}
