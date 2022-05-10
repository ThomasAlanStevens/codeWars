function squareSum(numbers){
    return numbers.reduce((total, n) => total += n**2, 0)
  }