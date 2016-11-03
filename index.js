/*global require,process,__dirname*/
(function withNode() {

  const electron = require('electron')
    , app = electron.app // Module to control application life.
    , BrowserWindow = electron.BrowserWindow; // Module to create native browser window.

  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let mainWindow = null;

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {

      app.quit();
    }
  });

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  app.on('ready', () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
      'title': 'ndm',
      'width': 720,
      'height': 480,
      'minWidth': 720,
      'show': false,
      'minHeight': 460,
      'center': true,
      'movable': true,
      'resizable': true,
      'minimizable': true,
      'maximizable': true,
      'closable': true,
      'fullscreenable': true,
      'dragable': true,
      'titleBarStyle': 'hidden',
      'backgroundColor': '#eee'
    });
    // and load the index.html of the app.
    mainWindow.loadURL(`file://'${__dirname}/dist/index.html`);
    mainWindow.on('ready-to-show', () => {

      mainWindow.show();
    });
    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });
  });
}());
