function meeting(s) {
    let ans = `` 
    let fullNames = s.toUpperCase().split(';').map(fullName => fullName.split(':')).sort((n1, n2) => n1[1].localeCompare(n2[1]) || n1[0].localeCompare(n2[0]))
    for(let i = 0; i < fullNames.length; i++){
      ans = ans.concat(`(${fullNames[i][1]}, ${fullNames[i][0]})`)
    }
    return ans
  }