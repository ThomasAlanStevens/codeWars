function openOrSenior(data){
    let outArray = []
    for(const d of data){
      d[0] > 54 && d[1] > 7 ? outArray.push('Senior') : outArray.push('Open')
    }
    return outArray
  }