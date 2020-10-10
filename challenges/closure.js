// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: Nested function can access the variable internal because internal has a global scop in relation to the nested function.



/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(num) {
  let count = 0;
  let sum = [];
  return function counter() {
    for( i=0; i < num; i++){
      count++
      sum.push(count);
    }
    return sum.reduce( (acc, cur) => acc + cur);
    
  };
};
const counter1 = summation(4);

console.log(counter1());


