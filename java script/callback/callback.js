let num = 50;

const logNum = () => {
  let num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

function sum(){console.log(arguments)}
sum();
sum(1,2,3);
sum([1,2,3]);
sum('kot','pies');