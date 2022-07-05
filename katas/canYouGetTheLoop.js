function loop_size(node){
    var nodes = [], n = node;
    
    while (nodes.indexOf(n) === -1) {
      nodes.push(n);
      n = n.getNext();
    }
    
    return nodes.length - nodes.indexOf(n);
  }