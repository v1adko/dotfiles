
const copyFile = require('./copy-file');
const getVsCodeUserDir = require('./get-user-dirrectory');

const vsCodeUserDirectory = getVsCodeUserDir();
console.log('==>  VSCode directory detected as .' + vsCodeUserDirectory);

console.log('==>  Copying settings.js');
copyFile('settings.json', '../', vsCodeUserDirectory);

console.log('==>  Copying keybindings.js');
copyFile('keybindings.json', '../', vsCodeUserDirectory);

console.log('==>  Copying snippets.js');
copyFile('javascript.json', '../snippets/', vsCodeUserDirectory + 'snippets/');

console.log('✅ Reload VSCode');
