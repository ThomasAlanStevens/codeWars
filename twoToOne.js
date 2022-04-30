function longest(s1, s2) {
    let combinedString = (s1 + s2).split('').sort()
    return [...new Set(combinedString)].join('')
  }