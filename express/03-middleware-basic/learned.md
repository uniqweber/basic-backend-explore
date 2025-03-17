### what is middleware

- it is like a bridge between user and route
- like when user send a request to the server etc route
- before hitting the route the middleware run every time.
- middleware used using `.use(callback function())`
- this is function have 3 parameter : `request`, `response`, `next`
- after creating next middleware the `next()` must be called for execute others code.

```javascript
// examples
app.use((req, res, next) => {
  console.log("middleware run");
  next();
});
```
