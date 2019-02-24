# EasyScript

Fast and easy way to create and run your node.js scripts.

### Benefits
* No any preparations.
* No need to install imported packages, they will be installed automatically.
* ES6 is set up.
* Everything ready. Just start writing your script.

## How to use

```
git clone https://github.com/IpShot/EasyScript.git
cd ./EasyScript
npm install
```

Add your script file to `scripts` folder.\
After new files added you have to run:
```
npm run build
```
You don't need to call build command after file changes. You have to do that only if new files added to `scripts` folder.

After build you can run your scripts as:
```
npm run your_script_file_name
```
You don't need to install any packages you used in the script. It will be installed automatically.

Example:
```
npm run helloworld
```
