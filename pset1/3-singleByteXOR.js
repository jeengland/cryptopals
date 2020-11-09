const input = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736'

const frequencyTable = [
    ['a', 8.12],
    ['b', 1.49],
    ['c', 2.71],
    ['d', 4.32],
    ['e', 12.02],
    ['f', 2.30],
    ['g', 2.03],
    ['h', 5.92],
    ['i', 7.31],
    ['j', 0.10],
    ['k', 0.69],
    ['l', 3.98],
    ['m', 2.61],
    ['n', 6.95],
    ['o', 7.31],
    ['p', 1.82],
    ['q', 0.11],
    ['r', 6.02],
    ['s', 6.28],
    ['t', 9.10],
    ['u', 2.88],
    ['v', 1.11],
    ['w', 2.09],
    ['x', 0.17],
    ['y', 2.11],
    ['z', 0.07]
]

let stdChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "

const frequencyCheck = (str) => {
    let score = 0;
    // Initial score checks for presence of non-alphanumeric characters / spaces
    for (let i = 0; i < str.length; i ++) {
        if (!stdChars.includes(str[i])) {
            score++
        }
    }
    // Second check adds to the score based on deviance from English character frequencies
    str = str.replace(/[^a-zA-Z]/g,"").toLowerCase();
    for (let i = 0; i < frequencyTable.length; i++) {
        let char = frequencyTable[i][0];
        let appearances = str.split(char).length - 1 ;
        let frequency = appearances / str.length * 100;
        frequency = parseFloat(frequency.toString().substring(0, 5))
        score += Math.abs(frequencyTable[i][1] - frequency);
    };
    return score;
};

const keys = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const decrypt = (buffer, key) => {
    let bytes = []
    for (let i = 0; i < buffer.length; i++) {
        bytes.push(buffer[i] ^ key.charCodeAt())
    }
    return Buffer.from(bytes).toString()
} 

const findKey = (str) => {
    const bytes = Buffer.from(str, 'hex')
    let best = {score: Infinity, string: '', key: ''}
    for (let i = 0; i < keys.length; i++) {
        const decrypted = decrypt(bytes, keys[i])
        let score = frequencyCheck(decrypted)
        if (score < best.score) {
            console.log(decrypted)
            best = {
                score: score,
                string: decrypted,
                key: keys[i]
            }
        }
    }
    return best
}

console.log(findKey(input))