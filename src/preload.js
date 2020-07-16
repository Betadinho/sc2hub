const {
    contextBridge,
    ipcRenderer
} = require('electron')

//Expose protected methods allowing the renderer process to use
//the ipcRenderere without exposing the entire object
contextBridge.exposeInMainWorld(
    'api', {
        send: (channel, data) => {
            //Whitelist channels
            let validchannels = ['toMain']
            if (validchannels.includes(channel)) {
                ipcRenderer.send(channel, data)
            }
        },
        receive: (channel, func) => {
            let validchannels = ['fromMain']
            if (validchannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => {
                    return func(...args)
                })
            }
        }
    }
)