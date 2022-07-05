function findNb(m) {
    let cube = 1
    while(m > 0){
      m -= cube**3
      cube++
    }
    return m == 0 ? cube - 1 : -1
  }