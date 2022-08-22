<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php

function decipherThis($str){
    var_dump($str);
    $wordsArr = explode(' ', $str);
    return join(' ', array_map(function($word){    
      
        $word = preg_replace_callback('/[0-9]+/', function($match){
          return chr($match[0]);
        }, $word);
        
        if(strlen($word) > 1){
          $temp = $word[1];
          $word[1] = $word[strlen($word) - 1];
          $word[strlen($word) - 1] = $temp;
        }
      return $word;
    }, $wordsArr));
    
  }

?>

</body>
</html>

