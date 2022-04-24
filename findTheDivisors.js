function divisors(integer) {
    let divisorArray = []
    for(let i = 2; i < integer; i++){
      integer % i == 0 ? divisorArray.push(i) : integer
    }
    return divisorArray.length > 0 ? divisorArray :  `${integer} is prime`
  };