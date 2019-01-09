var list = ["one", "two", "three"];
var secondList = ["four", "five"];

var functionList = [function apple() {
	console.log("apple");
}]

//access "two" via nestedList[0][1]
var nestedList = [
	["one", "two", "three"]
	];

var listThree = list.concat(secondList);

//coding exercise
var array = ["Banana", "Apples", "Oranges", "Blueberries"];	
// 1. Remove the Banana from the array.
// 2. Sort the array in order.
// 3. Put "Kiwi" at the end of the array.
// 4. Remove "Apples" from the array.
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

//note, these are all methods
array.shift();
array.sort();
array.push("Kiwi");
array.shift();
array.reverse();

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

console.log(array2[1][1][0]);

//access Joey's shout method via user.shout()
var user = {
	name: "Joey",
	age: 28,
	hobby: "Tennis",
	isMarried: false,
	books: ["Ready Player One", "Clean Code"],
	spells: ["shout", "fireball"],
	shout: function() {
		console.log("RUN AWAY");
	}
};

//access Andy's password via userList[0].password
var userList = [
	{
		username: "Andy",
		password: "secret",
	},
	{
		username: "Jess",
		password: "123",
	}
];

//coding exercise

// Create an object and an array which we will use in our facebook exercise. 
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// 2. Create an array which contains the object you have made above and name the array "database".
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var account = {
	username: "Joey",
	password: "GoJackets",
};

var database = [
	{
		username: "Joey",
		password: "GoJackets",
	}
];

var newsfeed = [
	{
		username: "Joey",
		timeline: "Hi",
	},
	{
		username: "GeorgeP",
		timeline: "Where is everyone?",
	},
	{
		username: "Ninja",
		timeline: "I'm hiding...",
	}
];

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
	if (user == database[0].username &&
		pass == database[0].password) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong login info...")
	}
}

signIn(usernamePrompt, passwordPrompt);

var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy",
];

for (var i=0; i < todos.length; i++) {
	todos[i] = todos[i] + "!";
}

var counter = 0;
while (counter < 3) {
	console.log("counter = " + counter);
	counter++;
}

var counterTwo = 0;

do {
	console.log("counterTwo = " + counterTwo);
	counterTwo++;
} while (counterTwo < 3);

function logTodos(todo, i) {
	console.log(todo, i);
}

todos.forEach(logTodos)




