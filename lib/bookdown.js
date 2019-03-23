'use strict'
var child = require('child_process')

const bookdown = {};

bookdown.buildBooks = function(path) {    
    var args = [ '../R/build_book.R', 'all', path];
    const s = child.spawn('Rscript', args);
    s.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    s.on('close', (code) => {
        if (code === 0) {
            console.log('mission complete')
        } else {
            console.error('you fail me')
        }
    })
};

module.exports = bookdown;