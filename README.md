# EasyScript

Fast and simple way to create and run your node.js scripts.

### Problem

Sometimes you need to create a script for a one-time task. For example you have to fetch all emails from database, filter and structure them in a required way, then write them to a txt file. If you don't want to spend time for configuring npm project from scratch this tool for you.

### Benefits
* No any configurations.
* No need to install used packages, they will be installed automatically.
* ES6 is set up.
* Everything ready. Just write your script and run.

## How to use

```
git clone https://github.com/IpShot/EasyScript.git
cd ./EasyScript
npm install
```

Add your script file to `scripts` folder.\
After a new script file added you have to run:
```
npm run build
```
You don't need to call the build command after a script change. You have to do that only if a new file added to `scripts` folder.

After build you can run your scripts as:
```
npm run your_script_file_name (without extension)
```
You don't need to install any packages you used in the script. It will be installed automatically.

Example:
```
npm run helloworld
```
