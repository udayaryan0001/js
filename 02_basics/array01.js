const myArr= [0,1, 2, 3, 4, 5];
console.log(myArr[0]);
  //output is 1
const myheors =["shaktiman" ,"naagraj"];
const myarr2= new Array(1,2,3)
  // output [ 1, 2, 3 ]
console.log(myarr2)
 //.length tells the length of array

///Array methods
myArr.push(6);
console.log(myArr); 

myArr.pop();
  //removes the last value directly

myArr.unshift(9);
 //It insert 9 at the begining

 myArr.shift();
 // console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice
//slice
// like 1,3. => 3 is not include
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

//splice 
//it almost same as the place but esma exting arrar ko he modified kar dega or line 1,3 kare ga toh 3 include rahe ga 
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);