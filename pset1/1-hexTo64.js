const input = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'
const output = 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t'

// Function to convert a hex string to an array of bytes
const hexToBase64 = (str) => {
    let bytes = Buffer.from(str, 'hex')
    return bytes.toString('base64')
}

const test = (hex, b64) => {
    const converted = hexToBase64(input)
    return console.log("Conversion matches expected output:", (converted === b64))
}

test(input, output)