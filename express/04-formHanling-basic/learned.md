## Learned topic

- what is ejs and why we need and how we used
- what is cookies and session difference between two
- what is static path and how we used

### others topic

- we need use this for handling form data

```javascript
app.use(express.json());
app.use(express.urlencoded({extended: true}));
```

### handle form data
- create form with input textarea submit button 
- give name to the input and textarea to access their value
- now in the form action set a route like: `/create-new-notes`
- and give the form a method like: `post`
- now create a route in the server file
- now you can check what user send on submit using: `req.body`
- now you can do whatever you want to do with this data

### form data showing on the client side
- 