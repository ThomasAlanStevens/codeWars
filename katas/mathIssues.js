Math.round = function(number) {
    if(String(number).includes('.')){
      return String(number).split('.')[1][0] >= 5 ? Math.ceil(number) : Math.floor(number)
    }
    return number
  };
  
  Math.ceil = function(number) {
    return String(number).includes('.') ? parseInt(number) + 1 : number;
  };
  
  Math.floor = function(number) {
    return  parseInt(number);
  };