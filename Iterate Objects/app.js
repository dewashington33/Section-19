// An object containing test scores
const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}
// You cannot iterate directly through an Object

// One way to iterate testScores follows
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`)
}

// Average the scores using the Oject.values method
let total = 0;
// The Object.values will create an array of scores
let scores = Object.values(testScores)
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)