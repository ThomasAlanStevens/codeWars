function sortCsvColumns(csvFileContent) {
    let array = csvFileContent.split('\n').map(str => str.split(';'))
    for(let i = 1; i < array.length; i++){
      array[i] = array[i].map((str,i) => `${array[0][i]}${str}`)
    }
    console.log(array)
    array = array.map(arr => arr.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())))
    for(let i = 1; i < array.length; i++){
        array[i] = array[i].map((str, i) => str.replace(`${array[0][i]}`, ''))
    }
    return array.map(arr => arr.join(';')).join('\n')
  }