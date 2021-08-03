/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/
function myError(message){
   const error=new Error(message);
   return error;
 }

const frequencyCounter = (str) => {
   if(Number.isInteger(str)==true){
      throw myError("Invalid Input");
     }
   
   let acount=0;
  let ecount=0;
  let icount=0;
  let ocount=0;
  let ucount=0;
  let myarray=str.split("");
  for(let i=0;i<myarray.length;i++){

     switch(myarray[i]){
        case "a":
           acount+=1;
            break;
         case "e":
            ecount+=1;
            break;
         case "i":
            
            icount+=1;
            break;
         case "o":
         
            ocount+=1;
            break;
         case "u":
           
            ucount+=1;
            break;
         default:
            break;

     }

  }
  let obj={
   a:acount,
   e:ecount ,
   i:icount ,
   o:ocount ,
   u:ucount,
}
 return obj;
}
module.exports = frequencyCounter;
