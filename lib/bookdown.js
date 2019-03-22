'use strict'
var child = require('child_process')

const bookdown = {};

bookdown.buildBooks = function() {    
    var cmd = 'Rscript ../R/build_book.R';
    child.exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`runtime error: ${error}`);
            return;
        }
        console.log(stdout);
        console.log(stderr);
    });
};

module.exports = bookdown;