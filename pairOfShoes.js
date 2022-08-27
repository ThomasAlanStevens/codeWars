function pairOfShoes(shoes) {
  const countLeftRight = {};
  
  for (const arr of shoes) {
    if (countLeftRight[arr[0]]) {
      countLeftRight[arr[0]] += 1;
    } else {
      countLeftRight[arr[0]] = 1;
    }
  }
  
  const countSize = {};
  
  for (const arr of shoes) {
    if (countSize[arr[1]]) {
      countSize[arr[1]] += 1;
    } else {
      countSize[arr[1]] = 1;
    }
  }
  
  
  if(countLeftRight['0'] == countLeftRight['1']){
    if(Object.values(countSize).filter(size => size % 2 == 1).length == 0) return true;
  }
  return false;
}