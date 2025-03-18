<!-- session and cookies
cookie parser
express.json()
express.urlencoded({extended:true})
ejs
view engines
views folder
app.set('view engine', 'ejs')
ejs calculation <%= %>
app.use(express.static(path.join(\_\_dirname, "public")))
public static
public folder in root level
require path
link css js in ejs page and delete public word in the link
tailwind in ejs file

<!--  -->

<!-- create a note taking app
and post route
and received  -->

## What is `ejs`

- EJS (embedded javascript) it's a template engine.
- it works with node.js
- it help to embedded js code inside html
- installing ejs cmd: `npm i ejs`

### Why ejs used

- Showing dynamic content (like: `username`,`productList`)
- We can used js logic like (`loop`,`if-else`) etc
- Making html file reusable (partials, layouts etc).

### how we used

- we have create a folder called `views`
- we have to create file called `index.ejs` inside views

```javascript
//setting up ejs
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", {name: "Uniqweber"}); //res.render() instead of res.send()
});
```

```html
<h1>Welcome, <%= name %>!</h1>
<!--here <%= name %> will be dynamic -->
```

### ejs syntex

- `<%= %>` value output
- `<%- %>` RAW HTML output
- `<% %>` executing js code like (`loop`,`if-else`) etc
-  `<% include('file') %>` for including others file
```html
<!-- example of foreach -->
<ul>
  <% let items = ["Apple", "Banana", "Mango"]; %>
  <% items.forEach(item => { %>
    <li><%= item %></li>
  <% }); %>
</ul>
```
