function gap(g, m, n) {
    const primes = []
    for(let i = m; i < n; i++){
      let primeCounter = true
      for(let j = 2; j <= Math.sqrt(i); j++){
        if(i % j === 0) primeCounter = false
      }
      if(primeCounter == true){
        if(primes.includes(i - g) && primes.indexOf(i - g) === primes.length - 1) return [i - g, i]
        else primes.push(i)
      }
    }
    return null
  }