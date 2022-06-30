function dataReverse(data) {
    if(data.length % 8 != 0) return []
    let bytes = []
    for(let i = 0; i < data.length/8; i++){
      bytes.push(data.slice(8*i, 8*i + 8))
    }
    console.log(data)
    return bytes.reverse().join(',').split(',').map(num => Number(num))
  }