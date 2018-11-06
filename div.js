function Div(arr){
   var n1= Number(arr[0]);
   var n2= Number(arr[1])
   if(n2!=0)
   console.log('Sum of',n1,'and',n2,'is',n1/n2) ;
   else console.log('Denominator cannot be 0') ;
 }
Div(process.argv.slice(2));