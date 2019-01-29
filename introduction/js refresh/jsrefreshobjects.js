const person = {
  //these are proporties of the "person"
  name: "kevin jordan",
  age: "19",
  //this is a method for the data structure
  greet() {
    console.log("Hello I am " + this.name);
  }
};
//destructuring
//search for the proporty of name for the
//incoming object we are interested in
const printName = ({name}) =>{
  console.log(name);
}
printName(person);

const {name, age} = person;

console.log(name, age);
//destructuring an array
const jobs = ['construction', 'doorman', 'bouncer']

const [job1,job2] = jobs

console.log(job1,job2);

//Spread operators
/*
We copy the values from within the hobby array
simply assigning a new variable to the
name of the existing array only assigns it to
the value at which the variable is pointing at
it does not create a new array and it edits
our old information
*/
const hobbies = ['zoology', 'computer science', 'Go lang'];

// for (let hobby of hobbies){
//   console.log(hobby)
// }
console.log("Original: " + hobbies);

console.log("\n");


console.log("Mapped version: " + hobbies.map(hobby => "Hobby: "+ hobby));

console.log("\n");


const newHobbies = hobbies.slice()

console.log("coppied values using slice: " + newHobbies);

console.log("\n");

const newestHobbies = [... hobbies]

console.log("Copied using the spread operator: " + newestHobbies);

console.log("\n");

//rest operators
//this function dynamically creates arrays
const toArray = (...args) =>{
  return args;
};

console.log(toArray(1,2,3,4,5,6));
