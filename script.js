function Class(subject,teacher, room) {
	this.Subject = subject;
	this.Teacher = teacher;
	this.Room = room;
}
function geoTeacherCheck() {
	isMonOrTue = (dayOfWeek == "Monday" || dayOfWeek == "Tuesday");
	geo.Teacher = (isMonOrTue ? "Mrs. MacNamara" : "Mrs. Kemp");
}
function getWeekOfYear() {
  var date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  var week1 = new Date(date.getFullYear(), 0, 4);
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

var maths = new Class("Maths", "Mr. Baird", "no idea");
var physics = new Class("Physics", "no idea", "no idea");
var cs = new Class("Computing Science", "no idea", "no idea");
var eng = new Class("English", "no idea", "no idea");
var geo = new Class("Geography", (isMonOrTue ? "Mrs. MacNamara" : "Mrs. Kemp"), "idk");
var pe = new Class("Physical Education", "no idea", "no idea");
var pse = new Class("Personal & Social Education", "no idea", "no idea");
var achievement = new Class("Achievement School", "no idea", "no idea");

var timeTable = [ 
	[physics, physics, cs, maths, geo, eng, pse],     //monday     1
	[geo, geo, physics, cs, achievement, maths, eng], //tuesday    2
	[maths, maths, eng, eng, physics, cs, geo],       //wednesday  3
	[cs, cs, pe, maths, eng, geo, physics],           //thursday   4
	[geo, eng, maths, cs, physics]                    //friday     5
]; //[rows][columns] // [days][periods]

console.table(timeTable); //displays table in console
var isMonOrTue;
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var date = new Date();
//date.setDate(date.getDate() + 1) // to get tmrws timetable
var weeksOfSchool = (getWeekOfYear() - 34) /* + 1 */; // to get next weeks timetable
var dayOfWeek = days[date.getDay()];
var startingLesson
function getLessons(period) { //call with the period of the lesson (1,2,3) to return based on startingLesson
    startingLesson = (Math.trunc(weeksOfSchool*(dayOfWeek=="Friday" ? 2 : 3))) % (dayOfWeek=="Friday" ? 5 : 7);
	var temp;
		if (period == 1) {temp = startingLesson};
		if (period == 2) {
			if (startingLesson >= 6) {
				temp = 0
			} else {
				temp = startingLesson + 1;
			}
		}
		if (period == 3) {
			if (startingLesson >= 5) {
				temp = 1
			} else {
				temp = startingLesson + 2;
			}
		}
		
	return temp;
}
function populate(){
	geoTeacherCheck();
	var todaysLessons = [timeTable[date.getDay()-1][getLessons(1)],timeTable[date.getDay()-1][getLessons(2)], timeTable[date.getDay()-1][getLessons(3)]]
	if (dayOfWeek=="Friday") {
		todaysLessons[2].Teacher = "";
		todaysLessons[2].Room = "";
		todaysLessons[2].Subject = "No Lesson, Go Home"
	};
	isMonOrTue = (dayOfWeek == "Monday" || dayOfWeek == "Tuesday"); //is it a monday or tuesday? (for geo teacher)

	document.getElementById("date").innerHTML=dayOfWeek;

	document.getElementById("p1Name").innerHTML=todaysLessons[0].Subject;
	document.getElementById("p1Teacher").innerHTML=todaysLessons[0].Teacher;
	document.getElementById("p1Room").innerHTML=todaysLessons[0].Room;

	document.getElementById("p2Name").innerHTML=todaysLessons[1].Subject;
	document.getElementById("p2Teacher").innerHTML=todaysLessons[1].Teacher;
	document.getElementById("p2Room").innerHTML=todaysLessons[1].Room;

	document.getElementById("p3Name").innerHTML=todaysLessons[2].Subject;
	document.getElementById("p3Teacher").innerHTML=todaysLessons[2].Teacher;
	document.getElementById("p3Room").innerHTML=todaysLessons[2].Room;
}
function timeSkip(daysToSkip) {
	date.setDate(date.getDate() + daysToSkip);
	dayOfWeek = days[date.getDay()];
	populate();
}
function weekSkip(weeksToSkip) {
	weeksOfSchool += weeksToSkip;
	populate();
}
populate();
// DISCLAIMER: absolute garbage code but works (kinda?) so shhhhh