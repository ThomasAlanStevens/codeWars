function bouncingBall(h,  bounce,  window) {
    let count = 0
    let ans = 0
    window >= h ? ans = -1 : h <= 0 ? ans = -1 : bounce >= 1 || bounce <= 0 ? ans = -1 : ans
    if(ans == -1) return ans
    while(h > window){
      h *= bounce
      count += 2
    }
    return count -1
  }