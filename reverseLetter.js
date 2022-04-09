function reverseLetter(str) {
    return str.replace(/[^A-Z]/ig, '').split('').reverse().join('')
}