const fs = require("fs");

fs.writeFile("hello.txt", "hello world", (err) => {
  console.log(err ? err : "file created");
});

fs.readFile("hello.txt", (err, files) => {
  console.log(err ? err : files.toString());
});

fs.appendFile("propose.txt", "hello", () => {
  console.log(err ? err : "new text added");
});

fs.unlink("propose3.txt", (err) => {
  console.log(err ? err : "file deleted");
});

fs.rename("propose2.txt", "propose3.txt", (err) => {
  console.log(err ? err : "file renamed");
});

fs.copyFile("propose4.txt", "propose4.txt", (err) => {
  console.log(err ? err : "file copied");
});

fs.mkdir("new/something/hello.txt", {recursive: true}, (err) => {
  console.log(err ? err : "folder created");
});

fs.readdir("./", (err, files) => {
  console.log(err ? err : files);
});

fs.rm("something/new", {recursive: true}, (err) => {
  console.log(err ? err : "folder deleted");
});
