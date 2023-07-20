
// QUES  = what is a promise ? 

//  In JavaScript, a promise is a good way to handle asynchronous operations.
//  It is used to find out if the asynchronous operation is successfully completed or not.


// -----------------------------------------------------------------------------------------------------------------------

//  QUES  = Generator function 

// ---------Generator-Function: A generator-function is defined like a normal function,
//  but whenever it needs to generate a value, it does so with the yield keyword rather than return. 
// The yield statement suspends the function’s execution and sends a value back to the caller,
//  but retains enough state to enable the function to resume where it is left off. 
// When resumed, the function continues execution immediately after the last yield run. 


function* fun() {
    yield 12;
    yield 13;
    yield 10;
}
  
let gen = fun();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


// -----------------------------------------------------------------------------------------------------------------------------  

// QUES 2 = First class function ?

// First-Class Function: A programming language is said to have First-class functions 
// if functions in that language are treated like other variables. 
//  So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.
//  JavaScript treat function as a first-class-citizens.
//  This means that functions are simply a value and are just another type of object.

const Arithmetics = {
	add: (a, b) => {
		return `${a} + ${b} = ${a + b}`;
	},
	subtract: (a, b) => {
		return `${a} - ${b} = ${a - b}`
	},
	multiply: (a, b) => {
		return `${a} * ${b} = ${a * b}`
	}

}

console.log(Arithmetics.add(20, 40));
console.log(Arithmetics.subtract(50, 17))
console.log(Arithmetics.multiply(50, 50))



