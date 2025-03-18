## What is `static path`

- Static Path or Static Files refers to CSS, JavaScript, Images, Videos, Fonts, HTML files, etc.
- which are sent directly from the server to the client.
- In Express.js, the `express.static()` method is used to serve static files.

### Why we need

- for load `css`, `js`, `Image` etc.
- Store frontend files directly on the server and send them quickly to the client.
- For used `HTML`, `Bootstrap`, `Tailwind` ।

### how we used

- we need create a folder called `public`
- we need store all file and folder inside public
- inside public we can create folder for keeping individual file type like: `js`-for js file, `css`-for css file, `image`-for storing img
- then we have to set static path in server like this

```javascript
app.use(express.static("public"));
// or
const path = require('path')
app.use(express.static(path.join(__dirname,"public")))
```
