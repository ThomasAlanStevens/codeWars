function SeriesSum(n){
    let total = 0.00
    for(let i = 0; i < n; i++){
      total += (1/((3)*i + 1))
    }
    return total.toFixed(2)
  }