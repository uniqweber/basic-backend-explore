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

## What is session

- A session stores data on the `server` instead of the user's browser.
- It is used to store user-specific data that persists across multiple requests.

### How Sessions Work (Backend Only)

- When a user logs in, the server creates a session and stores data `(e.g., userId)`.
- The server sends a session ID to the client as a cookie.
- On each request, the client sends the session ID, and the server retrieves the user data.

```javascript
// Example (Session in Express.js - express-session):
const session = require("express-session");

app.use(
  session({
    secret: "my_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/login", (req, res) => {
  req.session.user = "uniqweber";
  res.send("User logged in!");
});

app.get("/dashboard", (req, res) => {
  res.send(req.session.user ? `Welcome ${req.session.user}` : "Not logged in");
});
```
## Key Differences Between Session & Cookie
| Feature    | Cookie | Session |
| -------- | ------- | -------- |
| Stored Location	  | Browser (Client-side)    | Server (Backend)
| Data Size  | Small (4KB max)    | Large
| Security  | Less secure (can be accessed by JS)   | More secure (stored on server)
| Expiration  | Can be set manually   | Expires after session timeout

	
		
