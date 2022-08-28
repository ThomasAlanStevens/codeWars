function permuteAPalindrome(input) {
  let uniqueLetterArr = [...new Set(input.split("").sort())];
  let pal = 2;
  uniqueLetterArr.forEach(letter => {
    var re = new RegExp(letter, "g");
    if (input.match(re).length % 2 == 1) pal--;
  });
  if (pal > 0) return true;
  return false;
}
