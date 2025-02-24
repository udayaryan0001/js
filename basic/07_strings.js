const name="uday"
const repocount=50
console.log(name+repocount+"value")
console.log(`hello my name is ${name} and my repo count is ${repocount}`);  //if we have to write something inside the text
const gamename=new String("uday") 
console.log(gamename[0]); 
 // this is how we are accesing the key value pair
console.log(gamename.__proto__);

console.log(gamename.length);
  //gives the lenth
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2));
    //tells which character is present at which index we pass the index inside the chatAt() 
console.log(gamename.indexOf('t')); 
 //tells the index number acfter passing the character

const newString=gamename.substring(0,4);   //last value is not include
console.log(newString);

const anotherstring=gamename.slice(-1,4);
console.log(anotherstring);
