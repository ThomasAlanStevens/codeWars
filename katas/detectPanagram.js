function isPangram(string){
    return [...new Set(string.toLowerCase().replace(/[^a-z]/ig, ''))].length == 26 ? true : false
  }