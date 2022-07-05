function toWeirdCase(string){
    return string.split(' ').map(word => word.split('').map((letter, ind) => ind % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')).join(' ')
  }