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
title("Count Negative Numbers in a Sorted Matrix");