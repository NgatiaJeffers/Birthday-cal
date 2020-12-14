    var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var females = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var months = ["January", "Feburary", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December"];




function calc() {
    var days = document.getElementById('day').value;
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var gender = document.getElementById('gender').value;

    var today = new Date();
    // var dd   = today.getDate(days);
    var mm   = months[today.getMonth(month)]; 
    var yyyy = today.getFullYear(year);
    var anyDay  = days[today.getDay()];

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
        document.getElementById('your-name').innerHTML = ("Your Name Is: " + males[anyDay] + ".");
    
    } else if (gender === 'female') {
        document.getElementById('your-name').innerHTML = ("Your Name Is: " + females[anyDay] + ".");
    
    } else {}
}


