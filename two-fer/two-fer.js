var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
    //Solution 1
    // if(who)
    //   return `One for ${who}, one for me.`;
    // else
    //   return "One for you, one for me.";

    //Better solution
    return who ? `One for ${who}, one for me.` : `One for you, one for me.`;
  
};

module.exports = TwoFer;
