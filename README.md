# EasyScript

The easiest way to create and run your node.js scripts.
No preparations required.

### How to use

```
git clone https://github.com/IpShot/EasyScript.git
cd ./EasyScript
npm install
```

Add your script file to `scripts` folder.\
Next command adds run names for scripts from `scripts` folder to `package.json`:
```
npm run build
```
You don't have to call build command after file changes. You have to do that only if new files added to `scripts` folder.

After build you can run your scripts as:
```
npm run your_script_file_name
```

Example:
```
npm run helloworld
```
