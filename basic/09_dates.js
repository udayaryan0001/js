 //dates

// let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  
//date is a object in js

let mycreatedDate=new Date("01-14-2023")
//console.log(mycreatedDate.toDateString())
// console.log(mycreatedDate.tolocalString())

let mytimestamp =Date.now()/1000;  //convert mille second to second 
console.log(mytimestamp)    // 1/jan/1970  //ye ab tak ke mille second dega yeh
//toh essa yeh hame date nukalne pade ge 

console.log(mycreatedDate.getTime());

let myDate=new Date();
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getMonth()); 

newDate.toLocalString('default',{
    weekday: "long"
    
})