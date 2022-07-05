function solution(str){
    let finalArray = []
    let strArray = []
    for(let i = 0; i < str.length; i++){
      strArray.push(str.split('')[i])
      if(strArray.length == 2){
        finalArray.push(strArray.join(''))
        strArray = []
      }
    }
    str.length % 2 == 1 ? finalArray.push(`${str.slice(-1)}_`) : str
    return finalArray
  }