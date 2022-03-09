function isValidIP(str) {
    let strArray = str.split('.')
    if(strArray.includes('')) strArray.splice(strArray.indexOf(''))
    if(str == '' || /[^0-9.]/ig.test(str)) return false
    if(strArray.length != 4 || strArray.filter(num => num <= 255 && num >= 0).length != 4) return false
    for(let i = 0; i < str.split('.').length; i++){
      if(strArray[i].length != 1 && strArray[i][0] == '0' && str != '0.0.0.0') return false
    }
    return true
  }