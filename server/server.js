const dispatch = (key, message) => process.mainWindow && process.mainWindow.webContents.send(key, message)

module.exports = () => {
    // use dispatch method to send message to mainwindow
}