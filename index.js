(function(){
    var school = {
        name: 'Guagua National Colleges',
        regularRate: 12000,
        discount: 15,
        offerPrice: function() {
            var offerRate = this.regularRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

var courseName, regularRate, specialRate;

    courseName = document.getElementById('courseName');
    courseName.textContent = school.name;

    regularRate = document.getElementById('regularRate');
    regularRate.textContent = `From  ₱ ${school.regularRate}`;

    specialRate = document.getElementById('specialRate');
    specialRate.textContent = `To:  ₱ ${school.offerPrice()}`;
    
    var expMessage, today, expEnds;

  function offerExpires(today) {
        var weekToday, dayNames, day, monthNames, month, monthToday, dayNumber,dayToday,deadline;
        
        
        weekToday = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000);

        dayNames = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday',
            'Thursday', 'Friday', 'Saturday'];
         
        monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        day = dayNames[weekToday.getDay()] +
        ','+
        monthNames[today.getMonth()] + ` ` + (today.getDate()+3)+`,` + today.getFullYear();
        
        expMessage = `Enroll now!!! Offer expires next ${day}.`;

        return expMessage;

    }

    today = new Date();

    expEnds = document.getElementById('offerEnds');
    expEnds.textContent = offerExpires(today);

}());