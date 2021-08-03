/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */

 function myError(message){
    const error=new Error(message);
    return error;
  }
  
const rgbToHexConversion = (...rgbValues) => {
    let hex = "#";
   if(rgbValues.length >3){
    throw myError("Invalid Input");
   }
    rgbValues.forEach((Value) => {
        if (isNaN(Value) || Value > 255) {
            throw myError("Invalid Input");
        }
        let rgbStr = Value.toString(16);
        if (rgbStr.length < 2){
            rgbStr = "0" + rgbStr;
        }
        hex += rgbStr;
    })
    return hex;  
};

module.exports = rgbToHexConversion;
