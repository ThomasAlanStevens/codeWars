function sortArray(array) {
    let oddArray = array.filter(n => Math.abs(n) % 2 == 1).sort((a,b) => a - b)
    array.forEach((n, i) => {
      n % 2 == 0 ? oddArray.splice(i, 0, n) : n
    })
    return oddArray
  }