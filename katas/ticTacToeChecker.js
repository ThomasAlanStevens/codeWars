function isSolved(board) {
    for(let i = 0; i < 3; i++){
      if(board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] != 0) return board[i][0]
      if(board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[0][i] != 0) return board[0][i]
      if(board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[1][1] != 0) return board[1][1]
      if(board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[1][1] != 0) return board[1][1]
    }
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        console.log(board[i][j], board[i][j] == 0)
        if(board[i][j] == 0) return -1
      }
    }
    return 0
  }