function sumDigPow(a, b) {
    let eurekaArray = []
    for(let i = a; i < b; i++){
      if(i === String(i).split('').reduce((total,n,i) => total += n**(i+1),0)){
         eurekaArray.push(i)
      }
    }
    return eurekaArray
  }