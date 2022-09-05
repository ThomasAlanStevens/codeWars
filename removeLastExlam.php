function remove($s){
  if(str_ends_with($s, '!')) return substr($s, 0, -1);
  return $s;
}