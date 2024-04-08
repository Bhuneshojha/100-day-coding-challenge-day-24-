//          100 days of coding challenge ( DAY 24 )

//   Question 01
  // --This function prints number from 1 to 5 using loop
  function printsNumbersWithLet() {
    for (let i = 1; i<= 5; i++){
      // uses let for loop varriable i
      console.log(i);
    }
    // --`i` is not accessible here, outside the loop, because it's defined with `let`
  } 
  printsNumbersWithLet();
//   Question 02    
//--Using `let` for a variable that can be reassigned
let age = 25;
age = 26; //--Works fine because `let` allows reassignment
console.log(age); // Shows 26

     //--Trying to reassign a `const`-declared variable
const name = "Alice";
try {
    name = "Bob";     //--This line will cause an error
} catch (error) {
    console.log("Error: Can not reassign a `const`-declared variable."); // This message is shown
}
//--This example illustrates that `const` prevents changing the variable once it's set.
  
//   Question 03 
  {
    let blocklet = "it is visible inside the block";
  const blockConst = "Also inside the block";
  console.log(blocklet); // --It works fine
  console.log(blockConst); // --It works fine here too
}

try {
  console.log(blocklet);
} catch (error){
  console.log("`blockLet` is not accessible outside the block.");
}
try {
  console.log(blockConst);
} catch (error){
  console.log("`blockConst` is not accessible outside the block.");
}
// This shows that `let` and `const` keep variables safe inside the block where they're defined.


  











