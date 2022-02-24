function askForMissingDetails(list) {
    let nullArray = list.filter(person => Object.values(person).includes(null))
    nullArray.forEach(person => {
      for(const key in person){
        person[key] == null ? person.question = `Hi, could you please provide your ${key}.` : 0
      }
    })
    return nullArray
  }