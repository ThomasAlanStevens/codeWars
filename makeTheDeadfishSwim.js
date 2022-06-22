function parse( data ){
    let ans = 0
    let ansArr = []
    data.split('').forEach(c => {
      c == 'i' ? ans++ : c == 'd' ? ans-- : c == 's' ? ans = ans**2 : c == 'o' ? ansArr.push(ans) : ans
    })
    return ansArr
  }