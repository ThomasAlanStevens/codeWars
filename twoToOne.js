function longest(s1, s2) {
    let combinedString = (s1 + s2).split('').sort()
    return [...new Set(combinedString)].join('')
  }

  function reverseWords(str) {
    let arrOfWords = str.replace('.', '').split(' ')
    return arrOfWords.map(word => word = word.split('').reverse().join('')).join(' ') + '.'
  }

