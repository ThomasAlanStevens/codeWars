function DNAStrand(dna){
    let dnaArray = dna.split('')
    for(let i = 0; i < dnaArray.length; i++){
        dnaArray[i] == 'A' ? dnaArray[i] = 'T' :
        dnaArray[i] == 'T' ? dnaArray[i] = 'A' :
        dnaArray[i] == 'C' ? dnaArray[i] = 'G' :
        dnaArray[i] == 'G' ? dnaArray[i] = 'C' : dna
    }
        return dnaArray.join('')
}