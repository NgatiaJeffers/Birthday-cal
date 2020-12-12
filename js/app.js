var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var females = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const getDay = document.getElementById('day').value;
const getMonth = document.getElementById('month').value;
const getGender = document.getElementById('gender');

function calc() {
    var result = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;


}

var h = document.getElementById('h').value;
var w = document.getElementById('w').value;
var bmi = w / (h / 100 * h / 100);

var bmio = (bmi.toFixed(2));

document.getElementById("result").innerHTML="Your BMI is " + bmio;





// function submitFullNames(){
// event.preventDefault();
// var gender = document.getElementById('genders').value; 
// var date = document.getElementById('date').value;
// date = new Date(date);

// if (gender === 'male'){