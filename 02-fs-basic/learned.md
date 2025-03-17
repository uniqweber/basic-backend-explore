## File System

- what is file system or fs ? fs is node.js built in module, it is used to create delete update read files etc.
- common fs method: `writeFile`, `readFile`, `unlink`, `mkdir`, `readdir`, `appendFile`,`rename`, `copyFile`

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

### `copyFile()` - copy existing file

- it will copy file if the file existed. if not it will show error.
- it will also take three arguments: path, copyDestination, callback function
- e.g: `fs.copyFile('prev.txt',"new.txt"|"./something/filename.txt", (err)=>{ })`

### `unlink()` - delete existing file

- if file exists it will delete the file. if not exist it will show en err.
- it will take two arguments. deletedFileName and callback Function
- e.g: `fs.unlink("exist.txt",(err)=>{})`

### `readFile()` - read existing file
- if file exist it will read otherwise it will show err
- it will take two arguments. readFileName and callback function. an this function take two parameter , error, files.
- if error happen i will show error otherwise it will show file in binary format
- e.g: `fs.unlink("existFile.txt",(err,files)=>{})`
