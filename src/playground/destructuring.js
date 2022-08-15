/// Object Destructuring

// const person = {
// 	name: 'Uttam',
// 	age: 20,
// 	location: {
// 		city: 'surat',
// 		temp: 27,
// 	},
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) console.log(`It's ${temperature} in ${city}`);

// const book = {
// 	title: 'Ego is Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		// name: 'Penguin',
// 	},
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

///Array Destructuring

const address = ["210 Bapasitaram", "Surat", "Gujarat", "395006"];

const [, city, state = "Gujarat", zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "2.50", "$2.75"];

const [itemName, , mCost] = item;

console.log(`A medium ${itemName} costs ${mCost}`);
