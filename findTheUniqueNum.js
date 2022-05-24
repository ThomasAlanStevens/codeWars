function findUniq(arr) {
    return Number(arr.sort((a,b) => a - b).filter((n,i,a) => n != a[i-1] && n != a[i+1]).join(''))
  }