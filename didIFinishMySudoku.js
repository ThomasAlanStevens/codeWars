function doneOrNot(board){
    var set1Array = new Set(),
        set2Array = new Set(),
        set3Array = new Set();
    
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++){
        set1Array.add(board[i][j]);
        set2Array.add(board[j][i]);
        set3Array.add(board[(i%3)*3+j%3][Math.floor(i/3)*3+Math.floor(j/3)]);
      }
      if (set1Array.size != 9 || set2Array.size != 9 || set3Array.size != 9 )
        return "Try again!";
      set1Array.clear();
      set2Array.clear();
      set3Array.clear();
    }
    return "Finished!";
  }