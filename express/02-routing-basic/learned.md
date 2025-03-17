### What is routing in express

- Routing refers to defining endpoints in your application
- where each endpoint handles a specific type of HTTP request (like GET, POST, PUT, DELETE).
- In Express.js, routes are used to determine how to respond to different types of client requests based on the URL and HTTP method.
- a route consists of three things: Method(`GET`,`POST`,`PUT`,`DELETE`),path like `"/about"` `"/hello"`, and callback `function(that define how to do with the request)`

### route parameter `req.params`

- Dynamic Routing can be done using Route Parameters.

```javascript
//  example:
app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

- If you visit `/user/101`, the response will be `"User ID: 101"`.

### Query Parameters `req.query`

- Query parameters can be extracted from the URL to handle dynamic data.
- the rule of search in the url is : url+?+q+=searchableText like shown in the url below
```javascript
// example:
app.get("/search", (req, res) => {
  res.send(`Searching for: ${req.query.q}`);
});
```

- URL: http://localhost:3000/search?q=express
- Response: `"Searching for: express"`

### nodemon - package for auto restart and run server
- it is like liveserver for html we used earlier
- install it globally like `npm i nodemon -g`
- now run file instead of node use nodemon like: `nodemon filename.js`
