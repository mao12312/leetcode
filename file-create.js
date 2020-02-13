const title = (word) => {
    let fs = require("fs");
    let text = `const functionNmae = (argument) => {

}`;
    let title = word.toLowerCase().split(' ').join('-') + ".js"
    fs.appendFile(title, text, (err, data) => {
        if (err) console.log(err);
        else console.log('create end');
    });
}
title("Jewels and StonesNumber of Steps to Reduce a Number to Zero");