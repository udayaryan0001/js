const score =400
console.log(score);
const balance =new Number(100);
console.log(balance);

console.log(balance.toString().length);
//it converts into string and lenth tells the lenths for that string


console.log(balance.toFixed(2));
//it fixed the precesion value according to the given value like in this cose its 2

const othernumber=123.8966
console.log(othernumber.toPrecision(3)); //presion ma point se phale wali ko priority mile ge

const hundreds=100000
console.log(hundreds.toLocaleString())
//yeh beech main comma laga deta hain us standard ka according
console.log(hundreds.toLocaleString('en-IN'))
//it given it according to the indian standards(or in dian number system)

//////....maths....//////

//maths libraryies is bydefault in js
console.log(Math); 
 //it shows the maths id object
console.log(Math.abs(-4));
//it removes the -
console.log(Math.round(4.6));
// it roundoff the value
console.log(Math.ceil(4.2));
//uper wali value main round off kare ga
console.log(Math.floor(4.2));
//yeh neecha wali value lega

console.log(Math.max(4,6,8,5,43));
//gives max value
console.log(Math.min(4,6,8,5,43));
//gives min value
console.log(Math.random());
//math random hamesa 0 or 1 ka beech main value deti hain hamesa
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);
const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min +1))+min)