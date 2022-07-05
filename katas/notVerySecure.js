function alphanumeric(string){
    if(string == '') return false
    if(/[^a-z0-9]/ig.test(string) == true){
      return false
      }
    return true
  }