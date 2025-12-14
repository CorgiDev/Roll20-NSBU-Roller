// Preload script for Electron
// This script runs before the renderer process loads

const { contextBridge } = require('electron');

// Expose protected methods that allow the renderer process to use
// specific Electron APIs without exposing the entire Electron object
contextBridge.exposeInMainWorld('electronAPI', {
    platform: process.platform,
    version: process.versions.electron
});

console.log('Preload script loaded');
