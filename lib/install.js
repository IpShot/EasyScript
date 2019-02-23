import '@babel/polyfill';
import findImports from 'find-imports';
import readJson from 'read-package-json';
import shell from 'shelljs';


const defaultNodeModules = [
  "assert",
	"async_hooks",
	"buffer",
	"child_process",
	"cluster",
	"console",
	"constants",
	"crypto",
	"dgram",
	"dns",
	"domain",
	"events",
	"fs",
	"http",
	"http2",
	"https",
	"inspector",
	"module",
	"net",
	"os",
	"path",
	"perf_hooks",
	"process",
	"punycode",
	"querystring",
	"readline",
	"repl",
	"stream",
	"string_decoder",
	"timers",
	"tls",
	"trace_events",
	"tty",
	"url",
	"util",
	"v8",
	"vm",
	"zlib"
];

async function getPackageJsonDeps() {
  return new Promise((resolve, reject) => {
    readJson('package.json', console.log, false, (err, data) => {
      if (!err) {
        resolve(data.dependencies);
      } else {
        reject(err);
      }
    });
  });
}

async function installPackages(fileName) {
  const imports = findImports(`scripts/${fileName}.js`, { flatten: true });
  const installedPackages = await getPackageJsonDeps();
fs
  if (installedPackages) {
    const pkgs = Object.keys(installedPackages);
    const forInstall = imports.filter(i => !defaultNodeModules.includes(i) && !pkgs.includes(i));
    if (forInstall.length) {
      shell.exec(`npm install --save ${forInstall.join(' ')}`);
      console.log('Missed packages installed successfully.');
    } else {
      console.log('All packages are already installed.')
    }
  }
}

try {
  console.log('Installing missed packages...');
  installPackages(process.env.EASYSCRIPT);
} catch(e) {
  console.error('Something went wrong when installing missed packages: ', e);
}
