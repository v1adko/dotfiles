const path = require('path');
const copyFile = require('../../utils/copy-file');
const getVsCodeUserDir = require('./get-user-dirrectory');

const vsCodeUserDirectory = getVsCodeUserDir();
console.log('==>  VSCode directory detected as .' + vsCodeUserDirectory);

const copyToVsCode = (file) => {
  console.log(`==>  Copying ${file}`);
  copyFile(
    path.resolve(__dirname + '/../' + file),
    vsCodeUserDirectory + file
  );
}

copyToVsCode('settings.json');
copyToVsCode('keybindings.json');
copyToVsCode('snippets/javascript.json');

console.log('✅ Reload VSCode');
