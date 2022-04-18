function stray(numbers) {
    return Number(numbers.filter((num, i, arr) =>  num != arr[i + 1] && num != arr[i - 1]).join(''))
  }