const name = "kevin";

let age = 18;

const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby)=>{
  return ("User's name is " + userName +
  " , age is" +
  userAge +
  "and the user has hobbies" +
  userHasHobby
);
};

const addTwonums = (a,b) => a + b

console.log(summarizeUser(name,age,hasHobbies));

console.log(addTwonums(1,2));
