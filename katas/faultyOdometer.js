function faultyOdometer(n) {
    return n?n%10-(n%10>4)+9*faultyOdometer(n/10|0):0
}