function dnaToRna($str) {
  $ans = str_replace('T', 'U', $str);
  return $ans;
}