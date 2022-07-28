function countLanguages(list) {
    let languages = {}
    list.forEach(person => {
      languages[person.language] ? languages[person.language] += 1 : languages[person.language] = 1
    })
    return languages
  }