### what is express.js

- Express.js, or simply Express, is a web application framework for Node.js.
- It is designed for building web applications and APIs.
- It has been called the de facto standard server framework for Node.js.
- it manage everything from receiving the request and giving the response

### setup basic project

- first run `npm init -y`
- then install express `npm i express`
- then create a server

### how to create server

- first require or import express `const express = require('express')`
- then initialize app like this `const app = express()`
- then create a basic get method with root routing like this `app.get('/',(req,res)=>res.send('hello world'))`
- lastly listen the port like this: `app.listen(5000,()=>console.log('app is listening'))`
