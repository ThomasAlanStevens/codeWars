function removeSmallest(numbers) {
    let newArray = [...numbers]
    let smallestNum = numbers[0]
    for(const num of numbers){
        num < smallestNum ? smallestNum = num : num
    }
    newArray.splice(newArray.indexOf(smallestNum), 1)
    return newArray
};

console.log(removeSmallest([2,1,2,1,3]))