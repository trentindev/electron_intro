const { app, BrowserWindow, ipcMain } = require("electron/main");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  console.log("Electron App is Ready !"); // console serveur
  ipcMain.handle("ping", () => "pong"); // affichera pong dans la console client
  createWindow();
  console.log("Windows is ceated !"); // console serveur
});

app.on("window-all-closed", () => {
  console.log("Windows are all close !");
  if (process.platform !== "darwin") {
    app.quit();
  }
});
