function allContinents(list) {
    let continents = []
    list.forEach(person => {
      continents.push(person.continent)
    })
    return new Set(continents).size === 5
  }