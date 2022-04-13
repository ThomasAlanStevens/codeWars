function findSum(n) {
    let sum = 0
    for(let i = 3; i <= n; i++){
      i % 3 == 0 || i % 5 == 0 ? sum += i : sum
    }
    return sum
  }