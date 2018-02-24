var reverseString = function (param) {
    //Solution 1
    // if (param == '')
    //     return '';
    // else {
    //     var revStr = [];
    //     for(var i=param.length-1; i >= 0 ; i--)
    //         revStr.push(param[i]);
    //     return revStr.join('');
    // }

    //Solution 2
    // return param.split('').reverse().join('');
    //Solution 3
    let reversed = '';
    let n = param.length;
    while(n--) {
        reversed += param[n];
    }
    return reversed;
};


module.exports = reverseString;