function arrange(s) {
    let sCopy = [...s];
    let t = [];
    while(sCopy.length > 0){
      t.push(sCopy.shift())
      if(sCopy.length > 0) t.push(sCopy.pop());
      sCopy = sCopy.reverse();
    }
    return t;
  }