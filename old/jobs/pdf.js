let path = require('path');
let filePath = path.join(__dirname, '../data/');
let textract = require('textract');

let files = [
    'Grand-Wennerling-1.png'
];
files.forEach(function (file) {
    textract.fromFileWithPath(file, function( error, text ) {
        console.log(text);
    });
});

