// lev1_1:

let date1 = new Date("September 2, 2019 09:00:00");

document.getElementById("date1").innerHTML = date1;
let date2 = new Date(0);

document.getElementById("date2").innerHTML = date2;

let date3 = new Date(31556908800);
document.getElementById("date3").innerHTML = date3;

let date4 = new Date(86400000);
document.getElementById("date4").innerHTML = date4;


// lev1_2
var monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

var wocheTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let importantDate = new Date(2019, 9, 23, 11, 3, 29, 0);

date5.innerHTML = importantDate;
date6.innerHTML = importantDate.getFullYear();
date7.innerHTML = importantDate.getMonth() + " Monat";
date8.innerHTML = importantDate.getDate() + " Tag";
date9.innerHTML = importantDate.getHours() + " Stunde";
date10.innerHTML = importantDate.getMinutes() + " Minute";
date11.innerHTML = wocheTag[3]
date11.innerHTML = monate[9]

//

var weekDay = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
let myNewDate = new Date(2020, 6, 30, 11, 3, 29, 0);
console.log(myNewDate)

day.innerHTML = weekDay[myNewDate.getDay()];
hours.innerHTML = myNewDate.getHours();
minutes.innerHTML = myNewDate.getMinutes();
seconds.innerHTML = myNewDate.getSeconds();

if (myNewDate.getHours() < "12") {
    period.innerHTML = "AM";
} else {
    period.innerHTML = "PM";
}



// Lev1_3

let date = new Date('October 23, 2222 13:25:11');
date13.innerHTML = date

date.setDate(147)
date14.innerHTML = date

date.setDate(52)
date15.innerHTML = date

date.setDate(3)
date16.innerHTML = date

// addiere zum aktuellen Datum 30 Tage.
let today = new Date();
today.setDate(today.getDate() + 30);// adds 27 + 30
date17.innerHTML = today //Wed Aug 26 2020 14:08:01 GMT+0200



// lev 1_4
// Schreibe eine Funktion, um die Anzahl der Tage in einem bestimmten Monat zu erhalten.
// Die Funktion hat zwei Parameter monat und jahr.

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
    //Day 0 is the last day in the previous month
}
console.log(getDaysInMonth(1, 2016)); //31
console.log(getDaysInMonth(2, 2016));//29
console.log(getDaysInMonth(2, 2017));//28
console.log(getDaysInMonth(12, 2017));//31



// lev 1_5
//Schreibe eine Funktion, die den Monatsnamen an Hand eines bestimmten Datum ermittelt.
//getMonth()	Get the month as a number (0-11)

list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let newD = new Date();

function getMonthName(newD) {
    return list[newD.getMonth()]
}

console.log(getMonthName(new Date("2001,3,4"))); //März
console.log(getMonthName(new Date("2019,12,24"))); //Dezember
console.log(getMonthName(new Date("1410,07,15"))); //Juli



// Lev1_6
// Schreibe eine Funktion, um AM und PM zu erhalten.

let newDate3 = new Date();
function toAMPM(newDate3) {
    //condition ? exprIfTrue : exprIfFalse
    let amHours = newDate3.getHours() < "12" ? " AM" : " PM"
    return newDate3.getHours() + amHours
}

console.log(toAMPM(new Date(1999, 10, 5, 15)));
console.log(toAMPM(new Date()))
console.log(toAMPM(new Date(2019, 12, 3, 12)))
console.log(toAMPM(new Date(2000, 1, 1, 11)))