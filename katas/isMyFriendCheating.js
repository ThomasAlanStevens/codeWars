function removeNb (n) {
    let pairs = []
    let sum = (n*(n+1))/2
    for(let a = 1; a <= n; a++){
      let b = (n**2 + n - 2*a)/(2*a + 2)
      if(b == parseInt(b) && b <= n) pairs.push([a,b])
    }
  return pairs
}