function Mul(arr){
   var n1= Number(arr[0]);
   var n2= Number(arr[1])
   console.log('Sum of',n1,'and',n2,'is',n1*n2) ;
   
 }
Mul(process.argv.slice(2));