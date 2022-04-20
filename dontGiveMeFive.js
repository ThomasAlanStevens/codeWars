function dontGiveMeFive(start, end){
    let arrOfNums = []
    for(let i = start; i <= end; i++){
      if(/5/ig.test(String(i))){
        continue
      }
      arrOfNums.push(i)
    }
    return arrOfNums.length
  }