function weatherInfo($temp){
  var_dump(convertToCelsius($temp));
    if(convertToCelsius($temp) <= 0) {
      return convertToCelsius($temp) . " is freezing temperature";
    }
    else {
      return convertToCelsius($temp) . " is above freezing temperature";
    };
};
    
function convertToCelsius($temperature){
  $celsius = intval(($temperature - 32) * (5/9));
  return $celsius;
};