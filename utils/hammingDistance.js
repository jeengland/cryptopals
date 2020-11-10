const fixedXOR = require('../pset1/2-fixedXOR')

const hammingDistance = (a, b) => {
    return fixedXOR(a, b)
}

const stringToBinary = (str) => {
    binary = ''
    for (let i = 0; i < str.length; i++) {
        binary += str.charCodeAt(i).toString(2)
    }
    return binary
}

const input = '1c0111001f010100061a024b53535009181c'
const key = '686974207468652062756c6c277320657965'

// console.log(hammingDistance("this is a test", "wokka wokka!!!"))
console.log(hammingDistance(input, key))