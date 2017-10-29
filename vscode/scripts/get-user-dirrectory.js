const getVscodeUserDirectory = () => {
  const userDir = process.cwd().split('/').slice(0, 3).join('/');
  const vsCodeConfigPath = 'Library/Application Support/Code/User/';
  const destination = userDir + '/' + vsCodeConfigPath;

  return destination;
};

module.exports = getVscodeUserDirectory;
