function diamond(n){
    if( n <= 0 || n%2 == 0) return null
    let dia = []
    let half = Math.floor(n/2) + 1
    for(let i = 1; i <= n; i++){
      let spaces = Math.abs(half - i) % half
      let stars = n - (2 * spaces)
      dia.push(' '.repeat(spaces))
      dia.push('*'.repeat(stars))
      dia.push('\n')
      dia.join('')
    }
    return dia.join('')
  }