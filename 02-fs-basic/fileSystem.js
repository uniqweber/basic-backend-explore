/* 
** file system
1.writeFile -> create file

= it will take 3 arguments: first is file name in string format with file extension, second is data in string format, third is a callback function


*/

const fs = require("fs");

// fs.writeFile("hello.txt", "hello world", (err) => {
//   console.log(err ? err : "file created");
// });

fs.appendFile("propose.txt", "hello", () => {
  console.log(err ? err : "new text added");
});
