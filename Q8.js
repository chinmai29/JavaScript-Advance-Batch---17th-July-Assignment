// copy values from one object to another in above mentioned example , merge and print them.

//object-1
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

//object-2
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

//merge object-1 and object-2
const character = Object.assign(name, details);

console.log(character);

/*
  output -> {
  firstName: 'Philip',
  lastName: 'Fry',
  job: 'Delivery Boy',
  employer: 'Planet Express'
} */