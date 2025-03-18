### what is collection

- project need to store multiple data model.
- like: userData, AllPost, AllMedicine etc.
- we called that collection

### what is documents

- collection single data called documents
- like `users` documents is single user data

### what is schemas

- how the document should look like and what is value type of documents would be we called it schemas
- like: `name: String, age: Number` etc.

## **What is a Collection?**

A **collection** in MongoDB is similar to a table in SQL databases. It is a **group of related documents** stored together.

- Collections **do not require a fixed schema**, meaning documents inside a collection can have different structures.
- Collections are created automatically when inserting the first document.

📌 **Example:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```

## **What is a document?**

A document is a single record in a MongoDB collection. It is stored in BSON (Binary JSON) format, but can be read as JSON.

- Documents contain key-value pairs.
- Each document inside a collection can have a different structure.
- Example of a Document in the "users" Collection:

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Alice",
  "email": "alice@example.com",
  "age": 30
}
```

## **What is a Schema?**

A schema defines the structure of a document in MongoDB, mainly when using Mongoose (ODM for MongoDB).

- MongoDB is schema-less, but Mongoose allows defining a structured schema.
- Schemas help in data validation and ensuring consistency.
- Example of a Mongoose Schema:

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  age: {type: Number, min: 18},
});

const User = mongoose.model("User", userSchema);
module.exports = User;
```

Here,

- `name` → Must be a string and required.
- `email` → Must be unique and required.
- `age` → Must be a number and at least

## **What is a Key?**

A key in MongoDB refers to the field names in a document, which store values. It is similar to column names in SQL databases.

- Example of Keys & Values:

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Alice",
  "email": "alice@example.com",
  "age": 30
}
```

- Keys: `_id`, `name`, `email`, `age`
- Values: `"507f1f77bcf86cd799439011"`, `"Alice"`, `"alice@example.com"`, `30`

## **What is a Model?**

A model is a constructor function in Mongoose that creates and manages documents in a collection based on a defined schema.

- Models provide an interface to interact with MongoDB collections.
- They allow creating, reading, updating, and deleting (CRUD) documents easily.
- Example of a Mongoose Model:

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
```
### Difference between schema and model
| **Concept**   | **Schema**                                   | **Model**                                  |
|---------------|----------------------------------------------|--------------------------------------------|
| **Definition** | Defines the structure and validation of data. | A constructor to interact with the database using schema. |
| **Purpose**    | Specifies how data should be structured and validated. | Provides methods for CRUD (Create, Read, Update, Delete) operations on data. |
| **Usage**      | Used only for defining the design and validation of data. | Used for performing database operations based on the schema. |
| **Example**    | `const userSchema = new mongoose.Schema({...});` | `const User = mongoose.model('User', userSchema);` |
