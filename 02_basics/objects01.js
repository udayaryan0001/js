//singleton
//object.create

//object literls

const jsuser =
{
    name: "uday",
    "full name": "uday pandit",         //esko ham dot(.) sa axis nahi kar skte
    age: 18,
    location: "jaipur",
    email: "uday@google.com",
    isloggedin: false,
    lastlofindays: ["monday","saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"]);  //hamko email asa likhna pade ga because yeh keys ko as a string treate kare ga 
