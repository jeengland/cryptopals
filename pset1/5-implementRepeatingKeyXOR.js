const input = "Burning 'em, if you ain't quick and nimble\nI go crazy when I hear a cymbal"
const key = "ICE"
const output = "0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f"
const repeatingKeyXOR = (str, key) => {
    const keyArr = Buffer.from(key)
    const buffer = Buffer.from(str)
    const bytes = []
    for (let i = 0; i < buffer.length; i++) {
        bytes.push(buffer[i] ^ keyArr[i % keyArr.length])
    }
    return Buffer.from(bytes).toString('hex')
}

const test = () => {
    const result = repeatingKeyXOR(input, key)
    return console.log("XOR matches expected output:", (result === output))
}

test()