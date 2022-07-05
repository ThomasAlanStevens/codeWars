function oddOrEven(array) {
    return array.reduce((total, n) => total + n, 0) % 2 == 0 ? 'even' : 'odd'
 }