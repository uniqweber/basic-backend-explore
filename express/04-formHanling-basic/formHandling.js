const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir("notes", (err, files) => {
    err ? console.log(err) : res.render("index", {notes: files});
  });
});

app.post("/create-notes", (req, res) => {
  const {title, note} = req.body;
  fs.writeFile(`notes/${title.split(" ").join("")}.txt`, note, (err) => {
    err ? console.log(err) : res.redirect("/");
  });
});

app.get("/create-notes/:note", (req, res) => {
  const title = req.params.note;
  fs.readFile(`notes/${title}`, "utf-8", (err, noteFile) => {
    err ? console.log(err) : res.render("note", {title, note: noteFile});
  });
});

app.get("/edit-notes/:note", (req, res) => {
  const title = req.params.note;
  res.render("edit", {title});
});

app.post("/edit-notes", (req, res) => {
  const {oldTitle, newTitle} = req.body;
  fs.rename(`notes/${oldTitle}`, `notes/${newTitle}`, (err) => {
    err ? console.log(err) : res.redirect("/");
  });
});

// delete single notes
app.get("/delete-notes/:note", (req, res) => {
  const title = req.params.note;
  fs.unlink(`notes/${title}`, (err) => {
    err ? console.log(err) : res.redirect("/");
  });
});

// delete all notes
app.get("/delete-all", (req, res) => {
  fs.readdir("notes", (err, allNotes) => {
    allNotes.forEach((note) => {
      fs.unlink(`notes/${note}`, (err) => {
        err && console.log(err);
      });
    });
  });
  res.redirect("/");
});

app.listen(3000, () => console.log("server running on port", 3000));
