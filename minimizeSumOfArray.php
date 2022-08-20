<?php 
    function minSum($arr) {
        sort($arr);
        $sum = 0;
        for($i = 0; $i < count($arr)/2; $i++){
        $sum += $arr[$i] * $arr[count($arr)- 1 - $i];
        }
        return $sum;
    }
?>