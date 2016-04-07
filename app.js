/**
 * Created by T-Yazen on 07/04/2016.
 */
document.write('The current version of io.js ' + process.version)

var fs = require('fs')

var contents = fs.readFileSync('./package.json', 'utf8')
alert(contents)