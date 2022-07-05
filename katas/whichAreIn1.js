function inArray(array1,array2){
    let r = [];
    for (let i = 0; i < array1.length; i++) { 
      for (let j = 0; j < array2.length; j++) {
        if(array2[j].includes(array1[i]) === true){
            r.push(array1[i]);
        }else{
  
        }
      }
    }
    r = [...new Set(r)];
    return r.sort();
  }