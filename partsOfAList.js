function partlist(arr) {
    let finalArr = []
    for(let i = 1; i < arr.length; i++){
      let ansArr = []
      ansArr.push(arr.slice(0,i).join(' '))
      ansArr.push(arr.slice(i,arr.length).join(' '))
      finalArr.push(ansArr)
    }
    return finalArr
  }