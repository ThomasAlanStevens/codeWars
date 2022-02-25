function addUsername(list) {
    list.forEach(person => {
      return person.username = `${person.firstName.toLowerCase()}${person.lastName.toLowerCase()[0]}${new Date().getFullYear() - person.age}`
    })
    return list
  }
  