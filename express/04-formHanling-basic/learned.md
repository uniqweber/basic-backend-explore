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

## What is cookies

- A cookie is a small piece of data stored in the `user's browser`.
- It helps websites remember information between requests.
- Cookies are primarily used for authentication, user preferences, and tracking.

### How Cookies Work (Frontend & Backend)

- The server sends a cookie to the browser when a user logs in.
- The browser stores the cookie and automatically sends it with user's every request to the server.
- The server reads the cookie and identifies the user.

```javascript
// Example (Set Cookie in Backend - Express.js)
app.get("/set-cookie", (req, res) => {
  res.cookie("username", "uniqweber", {maxAge: 900000, httpOnly: true});
  res.send("Cookie set!");
});
```
```javascript
// Example (Read Cookie in Backend - Express.js):
app.get("/get-cookie", (req, res) => {
  res.send(req.cookies);
});
```
```javascript
// Example (Access Cookies in Frontend - JavaScript):
console.log(document.cookie);
```
