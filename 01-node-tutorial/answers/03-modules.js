//main file: Invokes everything to make sure it is working.

//Loading necessary modules
const person = require("./04-names");
const introducePerson = require("./05-utils");
const order = require("./06-alternate-flavor");


introducePerson(person.firstName,person.lastName);
require("./07-mind-gernade");
console.log(order);

