
function score( dice ) {
    let points = 0
    dice = dice.sort().join('')
    if(/111/.test(dice)){
        dice = dice.replace(/111/, '')
        points += 1000
    }
    if(/666/.test(dice)){
        dice = dice.replace(/666/, '')
        points += 600
    }
    if(/555/.test(dice)){
        dice = dice.replace(/555/, '')
        points += 500
    }
    if(/444/.test(dice)){
        dice = dice.replace(/444/, '')
        points += 400
    }
    if(/333/.test(dice)){
        dice = dice.replace(/333/, '')
        points += 300
    }
    if(/222/.test(dice)){
        dice = dice.replace(/222/, '')
        points += 200
    }
    while(/1/.test(dice)){
        dice = dice.replace(/1/, '')
        points += 100
    }
    while(/5/.test(dice)){
        dice = dice.replace(/5/, '')
        points += 50
    }
    return points
}