const fs = require('fs');
const path = require('path');

const copy = (from, to) => {
  let rs = null;
  let ws = null;

  try {
    rs = fs.createReadStream(from);
  } catch (err) {
    console.error(err);
    return;
  }

  try {
    ws = fs.createWriteStream(to);
  } catch (err) {
    console.error(err);
    return;
  }

  return rs.pipe(ws);
};

module.exports = copy;
