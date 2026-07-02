console.log("Javascript is connected")

// // Exercise 1 
// const myName = "Jonathan Sowell"
// let myAge = 23
// let isReading = true;
// let readingWhat = "The Critique of Pure Reason"
// let booksCompleted = 0;

// console.log(myName);
// console.log(myAge);
// console.log(isReading);
// console.log(readingWhat);
// console.log(booksCompleted);

// // Cool project idea: build a functionality in Javascript that allows me to see what I am reading, have read, and will read and is interactable and updatable. This would require HTML, CSS, Javascript, & a database.

// // Exercise 2
// const kant = {
//     name: "Immanuel Kant",
//     timePeriod: "Enlightenment",
//     nationality: "German",
//     books: ["The Critique of Pure Reason", "The Groundwork of the Metaphysics of Morals"],
//     readingStatus: "reading",
//     isRead: true // This is not entirely accurate, since I am currently working on reading him
// };

// const nietzsche = {
//     name: "Friedrich Nietzsche",
//     timePeriod: "post-Enlightenment",
//     nationality: "German",
//     books: ["Beyond Good and Evil", "The Genology of Morals"],
//     readingStatus: "reading",
//     isRead: true
// }
// console.log(kant.name);
// console.log(kant.books[0]);
// console.log(kant.isRead);

// // Exercise 3
// if (kant.readingStatus === "finished") {
//     console.log("Kant is finished");
// } else if (kant.readingStatus === "unstarted") {
//     console.log("Kant is unstarted");
// } else {
//     console.log("Kant is reading");
// }

// // Exercise 4
// function describePhilosopher(philosopher) {
//     return `Hello ${philosopher.name}, is ${philosopher.nationality}, and wrote during ${philosopher.timePeriod}.`
// }
// console.log(describePhilosopher(kant));
// console.log(describePhilosopher(nietzsche));

// // Exercise 5
// const readingList = ["Plato", "Aristotle", "Aquinas", "Descartes", "Camus"];

// function logged(name, number) {
//     console.log(number + 1, name);
// }
// readingList.forEach(logged);

// const shortNamesList = readingList.filter((philosopher) => {
//     return philosopher.length > 5;
// })
// console.log(shortNamesList);

// const unreadList = readingList.map((philosopher) => {
//     return philosopher + " - Unread";
// })
// console.log(unreadList);

// Exercise 6
const readingTracker = [
    {name: "Kant", timePeriod: "Enlightenment", readingStatus: "started", books: "The Critique of Pure Reason"},
    {name: "Camus", timePeriod: "post-Modern", readingStatus: "finished", books: "The Myth of Sisyphus"},
    {name: "Nietzsche", timePeriod: "Existential", readingStatus: "unstarted", books: "Beyond Good and Evil"},
    {name: "Descartes", timePeriod: "Enlightenment", readingStatus: "started", books: "Meditations on First Philosophy"},
    {name: "Hume", timePeriod: "Enlightenment", readingStatus: "unstarted", books: "A Treatise of Human Understanding"}
]

// Attempt 1
// function getReadingStats(tracker) {
//     let readingStatsObject = {}

//     let length = tracker.length
//     readingStatsObject.total = length

//     let readingStatus = tracker.forEach((philosopher) => {
//         let statusArray = philosopher.readingStatus
//         console.log(statusArray) 
//     })
//     console.log(readingStatus)

//     console.log(readingStatsObject);
// }


// // Attempt 2
// let readingStatsObject = {}

// function getTotalPhilosophers(tracker) {
//     let listLength = tracker.length
//     readingStatsObject.numberOf = listLength
// }

// getTotalPhilosophers(readingTracker);

// function getReadingStatsFinished(tracker) {
//     readingStatsObject.finished = tracker.filter((philosopher) => {
//         return philosopher.readingStatus === "finished"
//     }).length
//     console.log(readingStatsObject);
// }

// getReadingStatsFinished(readingTracker)

// function getReadingStatsStarted(tracker) {
//     readingStatsObject.started = ((philosopher) => {
//         return philosopher.readingStatus === "started"
//     }).length
//     console.log(readingStatsObject);
// }


// getReadingStatsStarted(readingTracker)

// function getReadingStatsUnstarted(tracker) {
//     readingStatsObject.unstarted = ((philosopher) => {
//         return philosopher.readingStatus === "unstarted"
//     }).length
//     console.log(readingStatsObject);
// }

// getReadingStatsUnstarted(readingTracker)

// console.log("------------------------------------------------------")

// Attempt 3
let readingStatsObjectTwo = {}

function getTotalPhilosophers(tracker) {
    let listLength = tracker.length
    readingStatsObjectTwo.numberOf = listLength
}

getTotalPhilosophers(readingTracker);

function getReadingStatus(tracker) {
    let readingStarted = 0
    let readingUnstarted = 0
    let readingFinished = 0

    tracker.forEach(philosopher => {
        if (philosopher.readingStatus === "started") {
            let startedTrue = {value: 1}
            let num = Number(startedTrue.value)
            readingStarted += num;
        }
        else if (philosopher.readingStatus === "unstarted") {
            let unstartedTrue = { value: 1}
            let num = Number(unstartedTrue.value)
            readingUnstarted += num;
        }
        else if (philosopher.readingStatus === "finished") {
            let finishedTrue = { value: 1}
            let num = Number(finishedTrue.value)
            readingFinished += num;
        }
    });
    console.log(`Status: Started (${readingStarted}), Unstarted (${readingUnstarted}), Finished (${readingFinished})`);
}

getReadingStatus(readingTracker);

// function listByStatus(tracker, status) {
//     tracker.filter((philosopher) => {
//         return philosopher.readingStatus === status
//     })
// }

// listByStatus(readingTracker, "unstarted")
// listByStatus (readingTracker, "started")
// listByStatus (readingTracker, "finished")

function listByStatus(tracker, status) {
    const filteredPhilosopher = tracker.filter((philosopher) => {
        return philosopher.readingStatus === status
    })
    return filteredPhilosopher
}

console.log(listByStatus(readingTracker, "finished"))

// Write a function called `listByStatus` that takes the array and a status string and returns only the philosophers matching that status

// Create more projects for me using the same ideas, but no hints and no instructions. Let me figure it out myself. Only give me the task. Make these more complex, but still using the same concepts. 