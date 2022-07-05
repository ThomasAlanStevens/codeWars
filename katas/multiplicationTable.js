multiplicationTable = function(size) {
    let rowCol = []
    for(let i = 1; i <= size; i++){
      rowCol.push(i)
    }
    let ansArrs = []
    for(let i = 1; i <= size; i++){
       ansArrs.push(rowCol.map(num => num * i))
    }
    return ansArrs
  }