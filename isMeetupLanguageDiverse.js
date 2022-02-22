function isLanguageDiverse(list) {
    let js = 0
    let ruby = 0
    let py = 0
    list.forEach(person => {
      person.language == 'JavaScript' ? js++ : person.language == 'Ruby' ? ruby++ : py++
    })
   return (js / 2 <= ruby) && (js / 2 <= py) && (py / 2 <= js) && (py / 2 <= ruby) && (ruby / 2 <= js) && (ruby / 2 <= py) ? true : false
  }