var number = function(busStops){
    return busStops.reduce((total, arr) => total += arr[0] - arr[1], 0)
  }