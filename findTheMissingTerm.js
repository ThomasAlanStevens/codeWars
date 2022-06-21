var findMissing = function (list) {  
    let diff = 0
    for(let i = 0; i < list.length - 1; i++){
      diff += list[i] - list[i + 1]
    }
    diff = Math.round(diff/list.length)
    return list.filter((n,i,a) =>  n !== a[i+1] + diff).slice(0,-1)[0]- diff
  }