## File System

- what is file system or fs ? fs is node.js built in module, it is used to create delete update read files.
- common fs method: `writeFile`, `readFile`, `unlink`, `mkdir`, `readdir`, `appendFile`,`rename`

### `writeFile()` - create File

- it will take three arguments : path in string format , data in string format , callback function and it have a parameter err.
- e.g: `fs.writeFile("path", "hello world", (err)=>{ })`

### `appendFile()` - add new value in the file

- add new value in the created file if file not exists it will create itself first then append on that file
- it will also take three arguments : path, data, callback function
- if file dose'nt exists it will create it self in the given name.
- e.g: `fs.appendFile("path", "hello world", (err)=>{ })`

### `rename()` - rename existing filename

- it will rename the file name of existing file
- it will also take three arguments : path, new path, callback function
- e.g: `fs.rename("path", "newPath", (err)=>{ })`
