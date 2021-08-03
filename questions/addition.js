/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/

function myError(message){
  const error=new Error(message);
  return error;
}
const addition = (...numbers) => {
  // all your code
  let sum=0;
  if(numbers.length == 0){
    throw myError("Invalid Input");
  }
  numbers.forEach((num)=>{
    if(!Number.isInteger(num)){
      throw myError("Invalid Input");
     }
    sum=sum + num;
  });
  return sum;
};

module.exports = addition;
