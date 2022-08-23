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

function getOrder($input){
  $input = str_replace(['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake' , 'coke'],['1Burger ', '2Fries ', '3Chicken ', '4Pizza ', '5Sandwich ', '6Onionrings ', '7Milkshake ' , '8Coke '], $input);
  $wordsArray = explode(' ', $input);
  sort($wordsArray);
  $input = join(' ', $wordsArray);
  return preg_replace('/[1-9]/', '', $input);
};

echo getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza");

?>

</body>
</html>

