const { ipcMain } = require('electron')

ipcMain.on('channel', (e, data) => {
    // do stuff
})