function longestConsec(strarr, k) {
    let compareString = ''
    if(k < 0 || k > strarr.length){
      return ''
    }
    for(let i = 0; i <= strarr.length - k; i++){
      if(compareString.length < strarr.slice(i, i + k).join('').length){
        compareString = strarr.slice(i, i + k).join('')
      }
    }
    return compareString
  }