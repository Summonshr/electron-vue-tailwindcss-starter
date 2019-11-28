const { app, BrowserWindow } = require('electron')
const home = require('./config/home')

require('./server/setup')
require('./server/listeners')

function createWindow() {
  process.mainWindow = new BrowserWindow(home)
  process.mainWindow.maximize()
  process.mainWindow.loadFile('./pages/home.html')
  process.mainWindow.show()

  process.dev && process.mainWindow.openDevTools()

  process.mainWindow.on('closed', () => process.mainWindow = null)

  require('./server/server')()
}
app.on('ready', createWindow)

app.on('window-all-closed', app.quit)

app.on('activate', () => process.mainWindow === null && createWindow())