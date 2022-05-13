module.exports = function (num) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
          };
        var quotient, result='';
        var numLookup = Object.values(romanNumerals);
        var romanLookUp = Object.keys(romanNumerals);
        for(var i=0;i<=numLookup.length-1;i++) {
            quotient = Math.floor(num / numLookup[i]);
            num = num -(quotient * numLookup[i]);
            for(var j=0;j<quotient;j++) {
                result+= romanLookUp[i]
            }
        }
        return result;
}

