function countDevelopers(list) {
    let count = 0;
    for(let i = 0; i < list.length; i++){
      list[i]['continent'] == 'Europe' && list[i]['language'] == 'JavaScript' ? count++ : count;
    }
    return count
  }