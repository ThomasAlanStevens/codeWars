var lastDigit = function(str1, str2){ 
    let str1n = BigInt(str1)
    let str2n = BigInt(str2)
  
    let exp1 = Number(String(str1n**1n)[String(str1n**1n).length - 1])
    let exp2 = Number(String(str1n**2n)[String(str1n**2n).length - 1])
    let exp3 = Number(String(str1n**3n)[String(str1n**3n).length - 1])
    let exp4 = Number(String(str1n**4n)[String(str1n**4n).length - 1])
    
    if(str2 == 0) return 1
    
    switch(str2n % 4n){
        case 1n:
          ans = exp1
          break;
        case 2n:
          ans = exp2
          break;
        case 3n:
          ans = exp3
          break;
        case 0n:
          ans = exp4
          break;
    }
    
    return ans
  }