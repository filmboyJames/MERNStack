let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";
console.log(isBoy);


let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc,curr) => (acc + curr.grade), 0) / grades.length);

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

let classRoomAverage = average(grades);
let boysAverage = average(getBoys(grades));
let girlsAverage = average(getGirls(grades));

let highestGrade = (maxGrade(grades));
console.log("Highest grade is ",highestGrade)
let lowestGrade = (minGrade(grades));
console.log("Lowest grade is ",lowestGrade);
let highestGradeBoys = maxGrade(getBoys(grades));
console.log("Highest boy grade is ",highestGradeBoys)
;
let highestGradeGirls = maxGrade(getGirls(grades));
console.log("Highest girl grade is ",highestGradeGirls)
;
let lowestGradeBoys = minGrade(getBoys(grades));
console.log("Lowest boy grade is ",lowestGradeBoys)
;
let lowestGradeGirls = minGrade(getGirls(grades));
console.log("Lowest girl grade is ",lowestGradeGirls)
;
