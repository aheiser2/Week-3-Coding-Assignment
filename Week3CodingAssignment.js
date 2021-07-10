//1
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

function subtractFirstFromLast(lastValue, firstValue){
    return ages[ages.length-1] - ages[0];
};

console.log(subtractFirstFromLast());
ages.push(18);
console.log(subtractFirstFromLast());

var getSum = 0;
for(var i = 0; i < ages.length; i++){
    getSum += ages[i];
};
console.log(getSum/(ages.length));



//2
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

var getTotal = 0;
for(var i = 0; i < names.length; i++){
    getTotal += names[i].length;
};
console.log(getTotal/names.length);

var allTogether = '';
for(var i = 0; i < names.length; i++){
    allTogether += ' ' + names[i];
};
console.log(allTogether);



/* 
3.  You write the last element of an array using the array's length - 1: array[array.length-1]

4.  You write the first element of an array using 0: array[0]
*/



//5
var nameLengths = [];
console.log(nameLengths);
for(var i = 0; i < names.length; i++){
    var newNameLength = names[i].length;
    nameLengths.push(newNameLength);
};
console.log(nameLengths);




//6
var calculateSum = 0;
for(var i = 0; i < nameLengths.length; i++){
    calculateSum += names[i].length;
};
console.log(calculateSum);



//7
function concatTimesNum(word, n){
    var concatWord = '';
    for(var i = 0; i < n; i++){
        concatWord += word;
        console.log(concatWord);
    }
};
concatTimesNum("Hello", 3);



//8
function createFullName(firstName, lastName){
    return firstName + ' ' + lastName;
};
console.log(createFullName("Jake", "Daniels"));



//9
var numbers1 = [8, 6, 7, 2, 5, 8, 32, 10, 40];
var scores = [50, 14, 22, 24];

function checkIsGreaterThan100(array){
    var arraySum = array.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
    });
    if (arraySum > 100){
        console.log(true);
    };
};
checkIsGreaterThan100(numbers1);



//10
function average(array){
    var average = array.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    });
    return average/array.length;
};
console.log(average(numbers1));



//11
function checkIfFirstAverageisGreater(array1, array2){
    console.log(average(array1));
    console.log(average(array2));
    
    if(average(array1) > average(array2)){
        return true;
    }else{
        return false;
    };
};
console.log(checkIfFirstAverageisGreater(numbers1, scores));



//12
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside.toLowerCase() === "yes"){
        isHotOutside = true
    }else{
        isHotOutside = false
    };
    console.log(isHotOutside)
    if(isHotOutside === true && moneyInPocket > 10.5){
        return true;
    }else{
        return false;
    };
};
console.log(willBuyDrink("yeS", 1));



//13
var guardStudents = []; // An array of color guard students

function Student(first, last, grade){
    this.firstName = first;
    this.lastName = last;
    this.grade = grade;
}; 
// A function that creates a new student with their name and grade

var student1 = new Student('Emma', 'Smith', 11);   
var student2 = new Student('Haley', 'Johnson', 9);
var student3 = new Student('Todd', 'James', 10);
var student4 = new Student('Sarah', 'Beck', 12);
// Some sample students

guardStudents.push(student1, student2, student3, student4); 
console.log(guardStudents);
// Testing to see if this would add them correctly


function addStudent(firstName, lastName, grade){
    var x = new Student(firstName, lastName, grade);
    guardStudents.push(x);
};
// A new function that creates the student and automatically adds them to the array

addStudent('Holly', 'Jackson', 12);
addStudent('Heidi', 'May', 9);
console.log(guardStudents);
addStudent('Abby', 'Heiser', 'coach');
console.log(guardStudents);
// More testing

/* I created this function so that I could add new color guard students to an existing 
database of students more easily. This would make it easier for me to keep track of 
students or potentially allow them to add themselves to the database. */
