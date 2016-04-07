/**
 * Created by T-Yazen on 07/04/2016.
 */
var app = require('app')
var BrowserWindow = require('browser-window')

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    mainWindow.loadUrl('file://' + __dirname + '/index.html')
})