//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
    this.year = input;
};

Year.prototype.isLeap = function () {
    //Solution 1
    // if((this.year % 4) == 0 && (this.year % 100) == 0 && (this.year % 400) == 0) //2000
    //     return true;
    // else if((this.year % 4) == 0 && (this.year % 100) == 0 ) //1900
    //     return false;
    // else if((this.year % 4) == 0)  //2016
    //     return true;
    // else                           //2015
    //     return false;
    //Ninja Code
    return (this.year % 400 === 0) || (this.year % 4 === 0 && this.year % 100 !== 0) ? true : false;
};

module.exports = Year;
