const fs = require('fs');
var path = require('path');
const appRoot = path.resolve(__dirname);
const result = JSON.parse(fs.readFileSync(appRoot + '/entitiesToPack.json'));

console.log('Gleamy: preparing for publishing.');

try {
  result.entitiesToPack.forEach((entity) => {
    console.log(entity);
    if (entity === "dist") {
      return void (0);
    }
    fs.cpSync(`../../${entity}`, `../../packages/react/${entity}`, {
      recursive: true,
    });
  });
} catch (error) {
  console.error(error);
}
