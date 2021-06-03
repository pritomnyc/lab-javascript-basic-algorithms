// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Ethan";

// 1.2 Print "The driver's name is XXXX".
console.log(`hacker1's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Winters";

// 1.4 Print "The navigator's name is YYYY".
console.log(`hacker2's name is ${hacker2}`);


//using prompts
// let hacker3 = prompt("hacker3 name please: ");
// console.log("hacker3's name is " + hacker3);


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The The driver has the longest name, it has ${hacker1.length} characters.`)
  }else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }

// Iteration 3: Loops