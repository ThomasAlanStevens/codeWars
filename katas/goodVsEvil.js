function goodVsEvil(good, evil){
    let goodVals = [1,2,3,3,4,10]
    let evilVals = [1,2,2,2,3,5,10]
    let goodTotal = good.split(' ').reduce((t, n, i) => t += n * goodVals[i], 0)
    let evilTotal = evil.split(' ').reduce((t, n, i) => t += n * evilVals[i], 0)
    return goodTotal > evilTotal ? 'Battle Result: Good triumphs over Evil' :
    goodTotal < evilTotal ? 'Battle Result: Evil eradicates all trace of Good' :
    'Battle Result: No victor on this battle field'
  }