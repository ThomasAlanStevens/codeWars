function titleCase(title, minorWords) {
    if(title == '') return ''
    if(minorWords == undefined) return title.split(' ').map(word =>`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(' ')
    return title.split(' ').map((word,ind) => {
      if(ind === 0 || !minorWords.toLowerCase().split(' ').includes(word.toLowerCase())) {
        return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`  
      }
      else{
        return word.toLowerCase()
      }
      }).join(' ')
  }