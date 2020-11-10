const stringToHex = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i).toString(16);
    };
    return result;
};

// console.log(stringToHex('this is a test'));

module.exports = stringToHex;
