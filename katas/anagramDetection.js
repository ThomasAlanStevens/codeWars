// write the function isAnagram
var isAnagram = function(test, original) {
    return test.toLowerCase().split(``).sort((a,b) => a.localeCompare(b)).join('') == original.toLowerCase().split(``).sort((a,b) => a.localeCompare(b)).join('') ? true : false
  };