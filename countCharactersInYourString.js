function count (string) {  
    let obj = {}
    if(string.length == 0 ) return obj
    let lettersArray = string.split('').sort().map((l,i,a) => l != a[i+1] ? `${l},` : l).join('').slice(0,-1).split(',')
    lettersArray.forEach(l => obj[l[0]] = l.length)
    return obj
  }
  
  //Given a string, return the letters and the amount of times it appears
  //P: Always a string or empty
  //R:return object with key names as the string letter and values as the amount of times it appears
  //E
  //P:  sort string, sepearate string by letter, use letter to get the amount and first part of str to get str, place in obj.
  