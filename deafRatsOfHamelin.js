var countDeafRats = function(town) {
    town = town.replace(/ /ig, '')
    town = town.split('P')
    let leftSide = town[0].split('')
    let rightSide = town[1].split('')
    
    let deaf = 0
    let leftArr = []
    let rightArr = []
    
    while(leftSide.length !== 0){
      leftArr.push(leftSide.splice(0,2).join(''))
    }
    while(rightSide.length !== 0){
      rightArr.push(rightSide.splice(0,2).join(''))
    }
    
    leftArr.forEach(rat => {
      if(rat !== '~O') deaf++
    })
    
    rightArr.forEach(rat => {
      if(rat !== 'O~') deaf++
    })
    
    return deaf
  }