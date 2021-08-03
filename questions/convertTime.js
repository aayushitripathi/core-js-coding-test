/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
 function myError(message){
    const error=new Error(message);
    return error;
  }


const convertTime = (seconds) => {
    if(Number.isInteger(seconds)==false){
        throw myError("Invalid Input");
       }
    seconds=seconds%(24*3600)
    let hours=seconds/3600;
    seconds%=3600;
    let minutes =seconds/60
    let obj={
        hours:hours,
        minutes:minutes,
        seconds:seconds,
    }
 
   return obj;
};

module.exports = convertTime;
