function findSenior(list) {
    let age = 0
    list.forEach((person, ind, arr) => {
      person.age > age ? age = person.age : age
    })
    return list.filter(person => person.age === age)
  }