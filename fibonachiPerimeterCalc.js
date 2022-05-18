function perimeter(n) {
    let fibArray = [1,1]
    for(let i = 2; i <= n; i++){fibArray.push(+fibArray[i - 1] + +fibArray[i - 2])}
    return n === 0 ? 4 :
    n === 1 ? 4 :
    fibArray.reduce((s,n) => +s + +n) * 4
}