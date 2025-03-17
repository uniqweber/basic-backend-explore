### 01. Node.js Basics:

- what is `node.js` = it is a js runtime environment
- install node js : check in terminal `node -v`
- check npm version : `npm -v` if not showing version then install node again

### 02. Setup Node Project

- run in terminal `npm init -y` it will create package.json file with all information
- if you want to give manually information then run `npm init`

### 03. Module System

- this is like : how you wanna export or import file
- two types of module system heave: `commonJs` , `module`
- by default project used commonJs
- if i want to change the module system then in package.json file, i have to create a property called `type:"module"`, now my project run on module based architecture. 
