import {Meteor} from 'meteor/meteor';
var moment = require('moment');


Meteor.startup(() => {

    console.log(main('23-10'));

});


function main(someDate) { //"23-10"
    /*
     * Some work here; return type and arguments should be according to the problem's requirements
     */
    var array = [];
    var result = "";
    var arr = someDate.split("-");
    var date = arr[0];
    var month = arr[1];

    var day;
    var whichDay;
    var totalDate;

       for (var i = 2016; i <= 2066; i++) {
        totalDate = "".concat(i.toString(), "-", month, "-", date);

        // console.log('totalDate is : ', totalDate); // totalDate is : 2016-10-22
        day = moment(totalDate);
        // console.log('day is : ', day); // day is : a MomentObject
        whichDay = day.weekday();
        //console.log('whichDay is : ', whichDay); //6

        if (whichDay === 5) {
            // console.log('Fri-' + i);
            result = 'Fri-' + i.toString();
            array.push(result);

        } else if (whichDay === 6) {
            // console.log('Sat-' + i);
            result = 'Sat-' + i.toString();
            array.push(result);


        } else if (whichDay === 0) {
            // console.log('Sun-' + i);
            result = 'Sun-' + i.toString();
            array.push(result);
        } else {

        }

    }

    return array;
}