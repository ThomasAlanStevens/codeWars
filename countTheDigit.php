<?php
    function nbDig($n, $d) {
    $arrOfNums = [];
    $count = 0;
    for($i = 0; $i <= $n; $i++){
        array_push($arrOfNums, $i ** 2);
    };
    foreach($arrOfNums as $num){
        foreach(str_split(strval($num)) as $digit){
        if($digit == $d) $count++;
        };
    };
    return $count;
    }
?>


