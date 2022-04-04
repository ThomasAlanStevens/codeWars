function deleteNth(arr,n){
    let numsArray = [...new Set(arr)]
    console.log(numsArray)
    numsArray.forEach(n1 => {
      while(arr.filter(n2 => n2 == n1).length > n){
        arr.splice(arr.lastIndexOf(n1), 1)
      }
    })
    return arr
  }