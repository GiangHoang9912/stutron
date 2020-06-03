const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.webContents.openDevTools();
  mainWindow.loadFile('./render/index.html');


  ipcMain.on('accept-message', (event, arg) => {
    const { userName, pass } = arg;
    if (userName === "giang" && pass == '1209') {
      mainWindow.loadFile('./QuizManagement/quizManage.html')
    }
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
