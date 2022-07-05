function sumTwoSmallestNumbers(numbers) {  
    let sortedArray = numbers.sort((a,b) => a - b)
    return sortedArray[0] + sortedArray[1]
}