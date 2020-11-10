const input = '1c0111001f010100061a024b53535009181c'
const key = '686974207468652062756c6c277320657965'
const output = '746865206b696420646f6e277420706c6179'

const fixedXOR = (input, key) => {
    let inputBytes = Buffer.from(input, 'hex')
    let keyBytes = Buffer.from(key, 'hex')
    let results = []
    for (let i = 0; i < inputBytes.length; i++) {
        results.push(inputBytes[i] ^ keyBytes[i])
    }
    results = Buffer.from(results)
    return results.toString('hex')
}

const test = (input, key, output) => {
    return console.log("XOR matches expected output:", (fixedXOR(input, key) == output))
}

test(input, key, output)