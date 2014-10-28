/** 
*  @author: Fernando Mohr
*  
*
*  This example show how to use the switch command
*  The case statments should be aligned with the 
*  switch statement. Always use a break in every 
*  case and always provide a default for the 
*  switch  
*  
**/

(function switchDemo() {
    var inspectMe = 1,
        result;
    switch (inspectMe) {
    case 0:
        result = "zero";
        break;
    case 1: 
        result = "one";
        break;
    default:
        result = "unknown";
    }
    console.log(result);
})();


