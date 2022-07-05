function towerBuilder(nFloors) {
    let tower = []
    for(let i = 0; i < nFloors; i++){
        tower.push(`${' '.repeat(Math.floor(((2 * nFloors - 1)/2) - i))}${'*'.repeat(2*(i) + 1)}${' '.repeat(Math.floor(((2 * nFloors - 1)/2) - i))}`)
    }
    return tower
  
  }