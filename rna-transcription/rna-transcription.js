var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function (dna) {
    //Solution 1
        // return dna.split('').map(item => {
        //     if(item == `G`)
        //         return `C`
        //     else if(item == `C`)
        //         return `G`
        //     else if(item == `T`)
        //         return `A`
        //     else if(item == `A`)
        //         return `U`
        //     else
        //         throw new Error('Invalid input');
        // }).join('');

        //Ninja solution
        const nucleotides = { G: 'C', C: 'G', T: 'A', A: 'U'}
        return dna.split('').map(item => {
          if (item in nucleotides)
            return nucleotides[item];
          throw new Error('Invalid input')
        }).join('');


  
};

module.exports = DnaTranscriber;