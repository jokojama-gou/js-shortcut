//You can shortcut ```docment.write ('')``` to ```w ('')```.
function w(m) { // Write function
m = "" + m + ""; // const m = text 
if ("undefined" != m) {  // Check it isn't empty or unknows
   document.write(m);
   }
document.write("<BR>");
}
