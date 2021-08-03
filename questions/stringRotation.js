function myError(message){
  const error=new Error(message);
  return error;
}


const rotateString = (str, n, direction) => {
  // str = input string
  // n = number of rotations
  //
  // input str = random ,1, right
  // output mrando

if(Number.isInteger(str)===true){
  throw myError("Invalid Input");
}
if(Number.isInteger(n)===false){
  throw myError("Invalid Input");
}
if(direction!=="left" && direction!=="right" )
{
  throw myError("Invalid Direction");
}
if(direction == 'left'){
  result = str.substr(n) + str.substr(0, n);
}
if(direction == 'right'){
  result = str.substr(str.length-n) + str.substr(0, str.length-n);
}
return result
};

module.exports = rotateString;
