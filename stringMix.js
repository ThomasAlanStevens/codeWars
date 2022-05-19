//PREP
//Compare the two strings' letters and take the bigger amount of the letter in either string, if came from s1 index with 1:, if came from s2 index with 2:, if same index with =: , place the max amount of letters if greater than 1, ignore dcaps
//P: s1 and s2, strings, multiword, 
//R: a string of all the max amount of letters indexed with where it came from if it has more than one occurence.
//E:
///P:

function mix(s1, s2) {
    let allLettersUsed = [...new Set(s1.split('').concat(s2.split('')))].join('').replace(/[A-Z^\W]/g, '').split('').sort()
    let finalAnswer = allLettersUsed.reduce((r, l) => {
        s1.split(`${l}`).length > s2.split(`${l}`).length && s1.split(`${l}`).length > 2 ? r.push(`1:${l.repeat(s1.split(`${l}`).length - 1)}/`) :
        s2.split(`${l}`).length > s1.split(`${l}`).length && s2.split(`${l}`).length > 2 ? r.push(`2:${l.repeat(s2.split(`${l}`).length - 1)}/`) : 
        s2.split(`${l}`).length > 2 || s1.split(`${l}`).length > 2 ? r.push(`3:${l.repeat(s2.split(`${l}`).length - 1)}/`) : ''
        return r
    }, [])
    return finalAnswer.sort((a,b) => b.length - a.length || a.localeCompare(b)).join('').replace(/3/g, '=').replace(/\/$/, '')
}

console.log(mix("Are they here", "yes, they are here")) // "2:eeeee/2:yy/=:hh/=:rr"
console.log(mix("looping is fun but dangerous",  "less dangerous than coding")) //"1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
console.log(mix("codewars", "codewars")) //nothing