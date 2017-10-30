const path = require('path');
const copyFile = require('../utils/copy-file');

const rootDirectory = process.cwd().split('/').slice(0, 3).join('/') + '/';

const copyToUserRoot = (file) => {
  console.log(`Copying ${file}`);
  copyFile(path.resolve(__dirname + '/' + file), rootDirectory + file);
}

console.log('==>  User root directory detected as .' + rootDirectory);

copyToUserRoot('.gitconfig');
console.log('✅ Done.');
