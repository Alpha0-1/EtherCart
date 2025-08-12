const path = require('path');
const fs = require('fs');
console.log('Building extension (stub)…');
fs.mkdirSync(path.resolve(__dirname, '../../dist/extension'), { recursive: true });
console.log('Done.');

