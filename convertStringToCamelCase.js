//PREP
// take in a string and get rid of all spaces,-,_ and capitilize the letter after if needed.
//P: String, multiword, may contain -, ,_
//R: return a string
//E:
//P:

function toCamelCase(str){
    //replace all -,_,spaces and next letter with letter replaced but capilized.
    return str.replace(/([\-\_\ ])(?<=[\-\_\ ])./g, str => str.slice(-1).toUpperCase())
}

console.log(toCamelCase("the_stealth_warrior") )// theStealthWarrior
console.log(toCamelCase("The-Stealth-Warrior")) // TheStealthWarrior
console.log(toCamelCase("A-B-C")) //ABC