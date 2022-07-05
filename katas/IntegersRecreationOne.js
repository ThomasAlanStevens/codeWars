function listSquared(m, n) {
    let ansArray = []
    for(let i = m; i <= n; i++){
      let divisors = []
      for(let j = 1; j <= Math.sqrt(i); j++){
        if(i % j == 0){
          divisors.push(j, i/j)
        }
      }
      if(Math.sqrt([...new Set(divisors)].reduce((total, num) => total += num**2, 0)) == parseInt(Math.sqrt([...new Set(divisors)].reduce((total, num) => total += num**2, 0)))){
        ansArray.push([i, [...new Set(divisors)].reduce((total, num) => total += num**2, 0)])
      }
    }
    return ansArray
  }