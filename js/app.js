// var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var females = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
function newArray(n) {
    this.length = n;
    for(var i = 1; i <= n; i++) {
        this[i] = 0;
    }
}

function maleArray(n) {
    this.length = n;
    for(var i = 1; i <= n; i++) {
        this[i] = 0;
    }
}

function femaleArray(n) {
    this.length = n;
    for(var i = 1; i <= n; i++) {
        this[i] = 0;
    }
}

// Initializing Days of the week
days = new maleArray(7);
days[0] = "Kwasi"
days[1] = "Kwadwo"
days[2] = "Kwabena"
days[3] = "Kwaku"
days[4] = "Yaw"
days[5] = "Kofi"
days[6] = "Kwame"


// Initializing Days of the week
days = new femaleArray(7);
days[0] = "Akosu"
days[1] = "Adwoa"
days[2] = "abenaa"
days[3] = "Akua"
days[4] = "Yaa"
days[5] = "Afua"
days[6] = "Ama"


// Initializing Months Array
months = new newArray(12);
months[1] = "January" 
months[2] = "February" 
months[3] = "March" 
months[4] = "April" 
months[5] = "May" 
months[6] = "June" 
months[7] = "July" 
months[8] = "August"
months[9] = "September" 
months[10] = "October"
months[11] = "November"
months[12] = "December"


function calc() {
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;;
    var year = document.getElementById('year').value;;
    var gender = document.getElementById('gender');


    var dates = new Date(year.value, month.value, day.value);
    var day = dates.getDay();

    if ((day <= 0) ||  (day > 31)) {
        alert("Day is out of range!");
    }

    if ((month <= 0) ||  (month > 12)) {
        alert("Month is out of range!");
    }

    if (year < 1900) {
        alert("You're not really that old!");
    }

    if (gender === 'male') {
        return maleArray(7);
    } else {
        return femaleArray(7);
    };


    document.getElementById('your-name').innerHTML = "Your Name Is: " + days;
};


var ysel = document.getElementsByName("year")[0],
msel = document.getElementsByName("month")[0],
dsel = document.getElementsByName("day")[0];
for (var i = 2018; i >= 1900; i--) {
    var opt = new Option();
    opt.value = opt.text = i;
    ysel.add(opt);
}
ysel.addEventListener("change", validate_date);
msel.addEventListener("change", validate_date);
setInitialDays();
jQuery("form.dayname-form").submit(function (event) {
    var fulldate = jQuery(this).find("#month").val()+"/"+jQuery(this).find("#day").val()+"/"+jQuery(this).find("#year").val();
    //var fulldate = dsel+"/"+msel+"/"+ysel;
    console.log(fulldate);
    
    jQuery(".dayname span").html(DayName(fulldate,jQuery(this).find("#gender").val()));		
    event.preventDefault();
});





















// function calc() {
//     var dates = new Date(year.value, month.value, day.value);
//     var days = dates.getDay();

//     switch (days) {
//         case 0:
//             result.innerHTML = "Kwasi";
//             break;
//         case 0:
//             result.innerHTML = "Kwadwo";
//             break;
//         case 0:
//             result.innerHTML = "Kwabena";
//             break;
//         case 0:
//             result.innerHTML = "Kwaku";
//             break;
//         case 0:
//             result.innerHTML = "Yaw";
//             break;
//         case 0:
//             result.innerHTML = "Kofi";
//             break;
//         case 0:
//             result.innerHTML = "Kofi";
//             break;    
//     }

//     if (day <= 0 && day > 31) {
//         document.getElementById('day').innerHTML = "You must enter a valid day!"
//     } else {}

//     if (day <= 0 && month > 12) {
//         document.getElementById('month').innerHTML = "You must enter a valid month!"
//     } else {}



// if(isNaN(year)) {
//     document.getElementById('year').innerHTML = "You must enter a year!"
//     return
// } else {};

// if(day <= 0 && day > 31) {
//     document.getElementById('day').innerHTML = "You must enter a valid day!"
// }

// if(month <= 0 && month > 12) {
//     document.getElementById('month').innerHTML = "You must enter a valid month!"
// }

// for (let i = 0; i < .length; i++) {
//     const element = array[i];
    
// }

// function calc() {
//     var newDay = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;


// }

// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];

// var h = document.getElementById('h').value;
// var w = document.getElementById('w').value;
// var bmi = w / (h / 100 * h / 100);

// var bmio = (bmi.toFixed(2));

// document.getElementById("result").innerHTML="Your BMI is " + bmio;





// function submitFullNames(){
// event.preventDefault();
// var gender = document.getElementById('genders').value; 
// var date = document.getElementById('date').value;
// date = new Date(date);

// if (gender === 'male'){