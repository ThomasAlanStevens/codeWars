function partsSums(ls) {
    let sum = ls.reduce((total, num) => total += num, 0)
    let ansArray = [sum]
    for(let i = 0; i < ls.length; i++){
      sum = sum - ls[i]
      ansArray.push(sum)
    }
    return ansArray
  }