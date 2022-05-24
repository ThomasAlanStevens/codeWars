function narcissistic(value) {
    console.log(String(value).split('').reduce((total, num, i, arr) => total += num**arr.length))
    return String(value).split('').reduce((total, num, i, arr) => total += num**arr.length, 0) == value ? true : false
  }
  
  