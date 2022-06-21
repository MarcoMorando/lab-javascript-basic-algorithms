// Iteration 1: Names and Input
console.log("-------------------- Names and Input ---------------------");
const hacker = "NodeJS";
console.log("The driver's name is "+hacker);
const hacker2 = "Brave";
console.log("The navigator's name is "+hacker2);

// Iteration 2: Conditionals
console.log("---------------------- Conditionals -----------------------");
if (hacker.length === hacker2.length ){
    console.log("Wow, you both have equally long names, "+hacker.length+" characters!");
} else if(hacker.length > hacker2.length){
    console.log("The driver has the longest name, it has "+hacker.length+" characters.");
} else{
    console.log("It seems that the navigator has the longest name, it has "+hacker2.length+" characters.");
}
// Iteration 3: Loops
console.log("-------------------------- Loops ---------------------------");
hacker.toUpperCase()
let separateHacker = "";
for (let i=0; i<hacker.length; i++ ){
    separateHacker += hacker[i]+" ";
}
console.log("3.1 = "+separateHacker)

console.log("3.2 = "+hacker2.split("").reverse().join(""))

let result = hacker.localeCompare(hacker2)

if (result == 0){
    console.log("3.3 = What?! You both have the same name?")
}