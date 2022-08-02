function getAverageAge(list) {
    return Math.round(list.reduce((total, person) => total+= person.age, 0)/list.length)
  }