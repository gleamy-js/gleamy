import { readFileSync } from 'fs';
import * as path from 'node:path';
import fs from 'node:fs';

const packageJSON = JSON.parse(
  fs.readFileSync(
    path.join(process.cwd(), './package.json'), 'utf8')
  );


function generateBanner() {
    let licenseContent;

    try {
      licenseContent = readFileSync('../../LICENSE.md', {
        encoding: 'utf8',
        flag: 'r',
      });
    } catch (error) {
      console.error('Error reading license file', error);
    }

    const licenseText = `/** 
    * @license ${packageJSON.name} v${packageJSON.version}
    *
    * ${licenseContent}
    */
  `;
    
    return licenseText;
}

export { generateBanner };