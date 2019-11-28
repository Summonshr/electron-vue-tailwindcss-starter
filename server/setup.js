
const path = require('path')

process.dev = process.argv.includes('--dev')

require('electron-reload')(path.join(__dirname, '../'), {
    electron: path.join(__dirname, '../', 'node_modules', 'electron','dist','electron'),
    hardResetMethod: 'exit'
});
