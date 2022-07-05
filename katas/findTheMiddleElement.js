function gimme (triplet) {
    let middle = triplet.map(num => num).sort((a,b) => a - b)[1]
    return triplet.indexOf(middle)
  }