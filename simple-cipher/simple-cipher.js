var Cipher = function (key) {
    this.key = key;  //'abcdefghijkl'
};

Cipher.prototype.encode = function (str) { //"iamapandabear"
    var cipherKey = this.key.substr(0, str.length - 1); //making key equal to string
    var array = [];
    cipherKey.split('').forEach( (ciperItem,index) => {  //a
        var num = ciperItem.charCodeAt(0) - 97; //Getting the key add
        console.log('num ',num);
        if(str[index].charCodeAt(0) + num > 122)
          array.push(String.fromCharCode(((str[index].charCodeAt(0) + num) - 123) + 97));
        else
          array.push(String.fromCharCode(str[index].charCodeAt(0) + num));
        console.log('array ',array);
    });
    return array.join('');

};

Cipher.prototype.decode = function (str) {
    return str.split('').map(item => {
        if(item.charCodeAt(0) < 100)
            return String.fromCharCode(item.charCodeAt(0) + 23);
        return String.fromCharCode(item.charCodeAt(0) - 3);
      }).join('');   
};

module.exports = Cipher;