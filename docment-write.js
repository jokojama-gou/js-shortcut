/*
You can shortcut "docment.write ('');" to "w ('');".
If you write  "import defaultExport from "module-name";" , you can get this.
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
