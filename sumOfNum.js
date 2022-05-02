function getSum( a,b )
{
  let sum = 0
  let numArray = [a,b].sort((a,b) => a - b)
  for(let i = numArray[0]; i <= numArray[1]; i++){
    sum += i
  }
  return sum
}