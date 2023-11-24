// DEFINE YOUR FUNCTION BELOW:
// const names = ['fred', 'barney', 'wilma'];

// function lastElement(names) {
//     if (names.length > 0) {
//         return names[names.length - 1]
//     }
//     return null;
// }

// console.log(lastElement([88]));

// Capitalize the first Letter
// function capitalize(str) {
//     if (typeof str !== 'string' || str.length < 1) {
//         return '';
//     }

//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitalize('fred'));

// Sum an array of numbers
// function sumArray(numbers) {
//     if (!Array.isArray(numbers)) {
//         return NaN;
//     }

//     let sum = 0;
//     for (const number of numbers) {
//         if (typeof number !== 'number') {
//             return NaN;
//         }
//         sum += number;
//     }

//     return sum;
// }

// console.log(sumArray([1, 2, 3]))

// *********************
// Function to return the day when pass the number of the week
function returnDay(num) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (num < 1 || num > 7) {
        return null;
    }

    return daysOfWeek[num - 1];
}

console.log(returnDay(5));

