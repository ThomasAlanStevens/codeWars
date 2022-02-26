function orderFood(list) {
    let food = {}
    list.forEach(person => {
      food[person.meal] ? food[person.meal] += 1: food[person.meal] = 1
    })
    return food
  }