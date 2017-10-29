const fs = require('fs');
const path = require('path');

const copy = (name, from, to) => {
  let rs = null;
  let ws = null;
  const fromPath = path.resolve(__dirname, from + name);
  const toPath = path.resolve(__dirname, to + name);

  try {
    rs = fs.createReadStream(fromPath);
  } catch (err) {
    console.error(err);
    return;
  }

  try {
    ws = fs.createWriteStream(toPath);
  } catch (err) {
    console.error(err);
    return;
  }

  return rs.pipe(ws);
};

module.exports = copy;
