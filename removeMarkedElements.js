Array.prototype.remove_ = function(integer_list, values_list){
  let ans = []
  integer_list.forEach((num, ind) => {
    if(!values_list.includes(num)) ans.push(num)
  });
  return ans;
}