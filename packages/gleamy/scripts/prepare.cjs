const fs = require('fs');
var path = require('path');
const appRoot = path.resolve(__dirname);
const result = JSON.parse(fs.readFileSync(appRoot + '/entitiesToPack.json'));

console.log('Gleamy: preparing for publishing.');

try {
  result.entitiesToPack.forEach((entity) => {
    console.log(entity);
    fs.cpSync(`../../${entity}`, `../../packages/gleamy/${entity}`, {
      recursive: true,
    });
  });
} catch (error) {
  console.error(error);
}
