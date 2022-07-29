function isSameLanguage(list) {
    let mainLanguage = list[0].language
    return list.every(person => person.language == mainLanguage)
  }