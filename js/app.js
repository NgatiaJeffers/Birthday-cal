var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var females = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


function calc() {
    event.preventDefault();
    var days = document.getElementById('day');
    var year = document.getElementById('year');
    var month = document.getElementById('month');
    var gender = document.getElementById('gender').value;
    date = new Date(eval(day).value);
    // var days = dates.getDay();

    function getTheDay() {
        date = new Date(eval(day).value);
        // return days[myDate.getDay()]
    }

    // Invalid Day
    if ((day <= 0) ||  (day > 31)) {
        alert("Day is out of range!");
    }

    //Invalid Month 
    if ((month <= 0) ||  (month > 12)) {
        alert("Month is out of range!");
    }

    // Invalid Year
    if (year < 1900) {
        alert("You're not really that old!");
    }

    if (gender === 'male'){ 
        // alert("Your name is: " + males[date.getDay()]);
        document.getElementById('your-name').innerHTML = ("Your Name Is: " + males[date.getDay()] + " . ");

    } else if (gender === 'female') {
        // alert("Your name is: " + females[date.getDay()]);
        document.getElementById('your-name').innerHTML = ("Your Name Is: " + females[date.getDay()] + " . ");

    } else {}

 
}
