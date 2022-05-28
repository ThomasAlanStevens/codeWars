function high(x){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return x.split(' ').sort((a,b) => b.split('').reduce((total, letter) => total += alphabet.indexOf(letter) + 1, 0) - a.split('').reduce((total, letter) => total += alphabet.indexOf(letter) + 1, 0))[0]
  }