var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var females = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


function calc() {
    event.preventDefault();
    var days = document.getElementById('day');
    var year = document.getElementById('year');
    var month = document.getElementById('month');
    var gender = document.getElementById('gender').value;
    date = new Date(eval(year).value);
    // var days = dates.getDay();

    function getTheDay() {
        date = new Date(eval(year).value);
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
        alert("Your name is: " + males[date.getDay()]);
        document.getElementById('your-name').innerHTML = ("Your Name Is: " + males[date.getDay()] + " . ");

    } else if (gender === 'female') {
        alert("Your name is: " + females[date.getDay()]);
        document.getElementById('your-name').innerHTML = ("Your Name Is: " + females[date.getDay()] + " . ");

    } else {}

}
 

// function getTheDay(aText)

// {

// myDays=

// ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

// myDate=new Date(eval('"'+aText.value+'"'))

// document.form1.textDay.value=myDays[myDate.getDay()]

// }


// var ysel = document.getElementsByName("year")[0],
// msel = document.getElementsByName("month")[0],
// dsel = document.getElementsByName("day")[0];
// for (var i = 2018; i >= 1900; i--) {
//     var opt = new Option();
//     opt.value = opt.text = i;
//     ysel.add(opt);
// }
// ysel.addEventListener("change", validate_date);
// msel.addEventListener("change", validate_date);
// setInitialDays();
// jQuery("form.dayname-form").submit(function (event) {
//     var fulldate = jQuery(this).find("#month").val()+"/"+jQuery(this).find("#day").val()+"/"+jQuery(this).find("#year").val();
//     console.log(fulldate);
    
//     jQuery(".dayname span").html(DayName(fulldate,jQuery(this).find("#gender").val()));		
//     event.preventDefault();
// });
