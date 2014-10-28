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
    var inspect_me = 1,
        result;
    switch (inspect_me) {
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


