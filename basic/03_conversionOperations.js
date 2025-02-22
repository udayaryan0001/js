let score ="33abc"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber =Number(score)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN nut type is number
// true => 1; false =>0

let isloggedin =1
let booleanisloggedin=Boolean(isloggedin)
console.log(booleanisloggedin)

//if converting into booleean
//1=> true
//0=> false
//" " => false
// "uday" => true

let somenumber=33
let stringnumber= String(somenumber)
console.log(stringnumber)
console.log(typeof stringnumber)


 
//////////operations///////////
let value =3
let negvalue=-value
console.log(negvalue)
 
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1="hello"
let str2=" uday"
str3 = str1+str2
console.log(str3);

console.log("1"+2)       //output is 12
console.log(1+"2")      //output is 12
console.log("1"+2+2)   //output is 122
console.log(1+2+"2")  //output is 32

console.log((3+4)*5%3);   //output is 2
console.log(true)       //output is true
console.log(+true)       //output is 1node basic/03_conversionOperations.js
let gamecounter=100
++gamecounter  
console.log(gamecounter)