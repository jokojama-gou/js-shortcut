/*
You can shortcut "docment.write ('');" to "w ('');".
If you write  "import defaultExport from "https://github.com/Yokoyama-Go/js-shortcut/blob/master/docment-write.js";" , you can get this.
*/

function w(m) { 
m = '' + m + '';  // const m = text 
if ("undefined" != m) {  // Check it isn't empty or unknow
   document.write(m);
   }
   else{
   }

document.write("<br>");  
}
