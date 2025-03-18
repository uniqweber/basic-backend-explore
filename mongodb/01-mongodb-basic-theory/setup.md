## setup mongodb basic

- first create a express project
- then create a folder called somethingModel.js
- then install `mongoose`
- then connect mongoose `mongoose.connect(mongodb://127.0.0.1:27017/routeName)`
- then write schema code for document
- then create model to perform crud operation like: `mongoose.model("singularName",schema)`
- export the model for using in other file like this:

```javascript
const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/practice`);
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});
module.exports = mongoose.model("user", userSchema);
```
