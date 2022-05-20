function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((total, num) => total + num, 0) 
}