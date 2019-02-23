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
  return new Promise(resolve => {
    readJson('package.json', console.log, false, (err, data) => {
      if (!err) {
        resolve(data.dependencies);
      } else {
        console.error(err);
      }
    });
  });
}

async function installPackages(fileName) {
  const imports = findImports(`scripts/${fileName}.js`, { flatten: true });
  const installedPackages = await getPackageJsonDeps();

  if (installedPackages) {
    const pkgs = Object.keys(installedPackages);
    const forInstall = imports.filter(i => !defaultNodeModules.includes(i) && !pkgs.includes(i));
    if (forInstall.length) {
      console.log('Installing missed packages...');
      shell.exec(`npm install --save ${forInstall.join(' ')}`);
    }
  }
}

installPackages(process.env.EASYSCRIPT);
