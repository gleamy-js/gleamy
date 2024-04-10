const fs = require('fs');
var path = require('path');
const appRoot = path.resolve(__dirname);
const result = JSON.parse(fs.readFileSync(appRoot + '/entitiesToPack.json'));

console.log('Gleamy: cleaning up.');
try {
  result.entitiesToPack.forEach((entity) => {
    if (entity === "dist") {
      return void(0);
    }
    fs.rmSync(`../../packages/gleamy/${entity}`, { recursive: true });
  });
} catch (error) {
  console.error(error);
}
