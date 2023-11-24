const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// Typical way to iterate through array
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`Row #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(`   ${row[j]}`);
    }
}

// New for of way same output
for (const [i, row] of seatingChart.entries()) {
    /* seatingChart.entries() creates a key value pair
    So row 0 has the following seatingChart.entries()
    0: "Kristen"
    1: "Erik"
    2: "Namita"
    */
    //console.log(i, row)
    console.log(`Row #${i + 1}`);
    for (const name of row) {
        console.log(`   ${name}`);
    }
}

//how to iterate over a string
for (let char of "hello world") {
    console.log(char)
}