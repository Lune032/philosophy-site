console.log("Javascript is connected")

// Exercise 1 
const myName = "Jonathan Sowell"
let myAge = 23
let isReading = true;
let readingWhat = "The Critique of Pure Reason"
let booksCompleted = 0;

console.log(myName);
console.log(myAge);
console.log(isReading);
console.log(readingWhat);
console.log(booksCompleted);

// Cool project idea: build a functionality in Javascript that allows me to see what I am reading, have read, and will read and is interactable and updatable. This would require HTML, CSS, Javascript, & a database.

// Exercise 2
const kant = {
    name: "Immanuel Kant",
    timePeriod: "Enlightenment",
    nationality: "German",
    books: ["The Critique of Pure Reason", "The Groundwork of the Metaphysics of Morals"],
    readingStatus: "reading",
    isRead: true // This is not entirely accurate, since I am currently working on reading him
};

const nietzsche = {
    name: "Friedrich Nietzsche",
    timePeriod: "post-Enlightenment",
    nationality: "German",
    books: ["Beyond Good and Evil", "The Genology of Morals"],
    readingStatus: "reading",
    isRead: true
}
console.log(kant.name);
console.log(kant.books[0]);
console.log(kant.isRead);

// Exercise 3
if (kant.readingStatus === "finished") {
    console.log("Kant is finished");
} else if (kant.readingStatus === "unstarted") {
    console.log("Kant is unstarted");
} else {
    console.log("Kant is reading");
}

// Exercise 4
function describePhilosopher(philosopher) {
    return `Hello ${philosopher.name}, is ${philosopher.nationality}, and wrote during ${philosopher.timePeriod}.`
}
console.log(describePhilosopher(kant));
console.log(describePhilosopher(nietzsche));

// Exercise 5
const readingList = ["Plato", "Aristotle", "Aquinas", "Descartes", "Camus"];

function logged(name, number) {
    console.log(number + 1, name);
}
readingList.forEach(logged);


// Create an array called readingList containing at least five philosopher names as strings
// Use forEach to log each one with its position number. The output should look like: 1. Kant, 2. Nietzsche etc.

// Create more projects for me using the same ideas, but no hints and no instructions. Let me figure it out myself. Only give me the task. Make these more complex, but still using the same concepts. 