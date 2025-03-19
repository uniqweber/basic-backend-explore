## Setup

folder Structure and initialize base layout:

- create a js file `etc.js`
- run `npm init -y`
- install express `npm i express`
- install mongoose `npm i mongoose`
- install ejs `npm i ejs`
- create `views` folder
- create `public` folder
- crate `model` folder
- initialize root route for testing

Now setup mongoose

- inside model create a model folder like: `user.js`
- require mongoose then connect and use .then for catching error
- create schema
- create model export it.

setup ejs

- create middleware for form - `app.use(express.json())`
- create middleware for form - `app.use(express.urlencoded({extended:true}))
- create a static path for that require `path`
- create a middleware for path- `app.use(express.static(path.join(\_\_dirname,"public")))
- create a middleware for view engine, `app.set("view engine","ejs")
- if you link static folder children don't need mention public in the path like `public/js/hello.js` instead of use this `/js/hello.js`
- now good to go
