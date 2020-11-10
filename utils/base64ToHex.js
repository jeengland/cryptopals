const base64ToHex = (str) => {
    let bytes = Buffer.from(str, 'base64');
    return bytes.toString('hex');
};

// console.log(base64ToHex('SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t'));
