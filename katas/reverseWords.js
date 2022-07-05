function reverseWords(str) {
    let arrOfWords = str.split(' ')
    return arrOfWords.map(word => word = word.split('').reverse().join('')).join(' ')
  }