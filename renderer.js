const information = document.getElementById("info");
information.innerText = `Cette application utilise Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), et Electron (v${versions.electron()})`;
console.log("This is a console.log() message from the renderer process.");
