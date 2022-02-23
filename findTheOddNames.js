function findOddNames(list) {
    return list.filter(person => {
      return person.firstName.split('').reduce((total,letter) => total += letter.charCodeAt(), 0) % 2 == 1
    })
  }