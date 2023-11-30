/**
 * Part 1: Refactoring Old Code
When code is outdated or inefficient, it often goes through a process called “refactoring.” 
Refactoring code is the process of restructuring that code without changing its original behavior.
For the first part of this assignment, revisit your code from ALAB 308.3.1, 
wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects, 
how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.
For reference, ALAB 308.3.1 is embedded below. The section on CSV parsing is “Part 3.”
 */
// Split the CSV string into rows based on newline characters.
const csvString = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

let rows = csvString.split('\n');
for (let i = 0; i < rows.length; i++) {
  // Split the current row into individual elements (id, name, occupation, age)
 // based on the comma delimiter and assign them to respective variables.
 let [cell1, cell2, cell3, cell4] = rows[i].split(',');
    console.log(cell1, cell2, cell3, cell4);
}

/** Part2
 * 
Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use.
Using the original CSV example data, here is what the result of this step should look like:

ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,5
8\n98,Bill,Doctor’s Assistant,26
becomes
[
["ID", "Name", "Occupation", "Age"],
["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctor’s Assistant", "26"]
]
 * */ 

let lines = csvString.split('\n');
let colNum = lines[0].split(',').length;
let twoD = [];
for(let line of lines){
    let row = line.split(',');
    if(row.length === colNum)
    twoD.push(row); 
}
console.log(twoD);

/** Part3
 * For each row of data in the result array produced by your code above, 
 * create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, 
you do not need to create an object for the heading row itself.
For instance, the results of the example data above being passed through this step are as follows:
[["ID", "Name", "Occupation", "Age"],
["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctor’s Assistant", "26"]
]
becomes
[
{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
]
{id: "42", name: "Bruce", occupation: "Knight", age: "41"}
1 {id: "57", name: "Bob", occupation: "Fry Cook", age: "19"}
2 {id: "63", name: "Blaine", occupation: "Quiz Master", age: "58"}
3 {id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26"}
*/
//let lines = csvString.split('\n');
//using const map1 = array1.map((x) => x * 2);
//let header = lines[0].split(',');
//let result = [];
for(let i =1; i<lines.length;i++){
    let values = lines[i].split(',');
    let dataObj ={}
for(let j=0; j< header.length;j++){
    dataObj[header[j]]= values[j];
}    
    result.push(dataObj)
}
console.log(result);

/**Part4
 * Part 4: Sorting and Manipulating Data
It is important to know how to work with data in this format, an array of objects, 
as it is one of the most commonly used data formats in JavaScript.
Using array methods, accomplish the following tasks, in order upon the result of Part 3:
1-Remove the last element from the sorted array.
2-Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }

Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }

So far, the results should look like this:

[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]

Finally, use the values of each object within the array and the array’s 
length property to calculate the average age of the group. 
This calculation should be accomplished using a loop.
*/

//let lines = csvString.split('\n');
//using const map1 = array1.map((x) => x * 2);
let header = lines[0].split(',').map(header => header.toLowerCase());;
let result = [];
for(let i =1; i<lines.length;i++){
    let values = lines[i].split(',');
    let dataObj ={}
for(let j=0; j< header.length;j++){
    dataObj[header[j]]= values[j];
}    
    result.push(dataObj)
}


console.log(result.pop());
console.log("After pop: ",result);
console.log(result.splice(1, 0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" }))
console.log("After splice: ",result);
console.log(result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }));
console.log("After push: ",result);

let totalAge = 0;
for(let i=0;i<result.length;i++){
    totalAge +=parseInt(result[i].age);
    console.log("total ages: ",totalAge , result[i].age)
}
let avrageAge = totalAge/result.length
console.log("avrageAge: ",Math.round(avrageAge))