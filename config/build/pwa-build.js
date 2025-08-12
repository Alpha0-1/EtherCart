const path = require('path');
const fs = require('fs');
console.log('Building PWA (stub)…');
fs.mkdirSync(path.resolve(__dirname, '../../dist/pwa'), { recursive: true });
console.log('Done.');

