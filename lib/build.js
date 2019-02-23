import '@babel/polyfill';
import fs from 'fs';
import jsonfile from 'jsonfile';


const file = 'package.json';
const commands = {};
const scripts = fs.readdirSync('scripts');
const names = scripts
  .filter(s => s.split('.').pop() === 'js')
  .map(s => s.slice(0, s.length - 3));

names.forEach(name => {
  const installScript = `babel lib/install.js | EASYSCRIPT=${name} node`;
  const runScript = `{ babel lib/index.js && babel scripts/${name}.js; } | EASYSCRIPT=${name} node`;
  commands[name] = `${installScript} && ${runScript}`;
});

async function updatePackageJsonScripts() {
  const packageJson = await jsonfile.readFile(file);
  packageJson.scripts = { ...packageJson.scripts, ...commands };
  fs.writeFileSync(file, JSON.stringify(packageJson, null, 2));
}

(async () => {
  try {
    console.log('Adding scripts...');
    await updatePackageJsonScripts();
    console.log('Scripts added successfully.')
  } catch(e) {
    console.error('Something went wrong while adding scripts: ', e);
  }
})();
