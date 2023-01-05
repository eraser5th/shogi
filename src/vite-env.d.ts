/// <reference types="vite/client" />

export interface IElectronAPI {
  loadPreferences: () => Promise<void>,
  versions: {
    ping: () => string
  }
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
