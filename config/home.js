
const { nativeImage } = require('electron')
const path = require('path')

var image = nativeImage.createFromPath(__dirname + '../images/icon.jpg');
image.setTemplateImage(true);

module.exports = {
    show: false,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js')
    },
    icon: image
}