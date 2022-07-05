function wave(str){
    let strArray = str.split('');
    let strFinalArray = [];
    for(let i = 0; i < strArray.length; i++){
        if(strArray[i] == ' ') continue;
        strArray[i] = strArray[i].toUpperCase();
        strFinalArray.push(strArray.join(''));
        strArray[i] = strArray[i].toLowerCase();
    };
}
