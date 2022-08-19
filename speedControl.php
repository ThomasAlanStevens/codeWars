<?php
    function gps($s, $x) {
        $distArr = [];
        for($i = 0; $i < count($x) - 1; $i++){
        array_push($distArr, ($x[$i+1] - $x[$i])/$s * 3600);
        };
        return max($distArr);
    }
?>