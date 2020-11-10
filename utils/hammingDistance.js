const fixedXOR = require('../pset1/2-fixedXOR.js');
const stringToHex = require('./stringToHex.js');

const hammingDistance = (a, b) => {
    let distance = 0;
    const bytes = fixedXOR(a, b);
    for (let i = 0; i < bytes.length; i++) {
        distance += bytes[i].toString(2).match(/1/g).length;
    };
    return distance;
};

module.exports = hammingDistance;

// console.log(hammingDistance(stringToHex("this is a test"), stringToHex("wokka wokka!!!")));
// Should output 37
