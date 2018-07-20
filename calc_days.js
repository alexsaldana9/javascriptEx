//9. Write a JavaScript program to calculate days 
//left until next Christmas.

var NowMoment = moment();

//var moment = require('moment');

require("moment/min/locales.min");

function daysRemaining() {
    var eventdate = moment("2018-12-25");
    var todaysdate = moment();
    return eventdate.diff(todaysdate, 'days');
}
console.log(daysRemaining());

