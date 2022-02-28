function isAgeDiverse(list) {
    let age10s = 0
    let age20s = 0
    let age30s = 0
    let age40s = 0
    let age50s = 0
    let age60s = 0
    let age70s = 0
    let age80s = 0
    let age90s = 0
    let age100s = 0
    list.forEach(person => {
      switch(true){
          case person.age >= 10 && person.age < 20:
            age10s++
            break
          case person.age >= 20 && person.age < 30:
            age20s++
            break
          case person.age >= 30 && person.age < 40:
            age30s++
            break
          case person.age >= 40 && person.age < 50:
            age40s++
            break
          case person.age >= 50 && person.age < 60:
            age50s++
            break
          case person.age >= 60 && person.age < 70:
            age60s++
            break
          case person.age >= 70 && person.age < 80:
            age70s++
            break
          case person.age >= 80 && person.age < 90:
            age80s++
            break
          case person.age >= 90 && person.age < 100:
            age90s++
            break
          case person.age >= 100:
            age100s++
            break
          default:
            break
      }
    })
    if(age10s && age20s && age30s && age40s && age50s && age60s && age70s && age80s && age90s && age100s) return true
    return false
  }