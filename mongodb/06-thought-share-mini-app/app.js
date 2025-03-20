const express = require("express");
const app = express();
const path = require("path");
const authRoute = require("./routes/auth.routes");
const profileRoute = require("./routes/profile.routes");
const allPostRoute = require("./routes/allPost.routes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(authRoute);
app.use(allPostRoute);
app.use(profileRoute);

app.listen(3000);
