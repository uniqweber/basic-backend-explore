**_every mongoose code is asynchronous_**
so when use create read or something doing we need to must use `async-await`.

---

## Create

`save()`, `create()`

- `save()` used when i wanna create new document and wanted to save in the db
- `create()` used when i wanna insert new data in the db
- for mongoose
  `new Model()` or `model.create()`

## Read

`find()`, `findOne()`, `findById()`

- `find()`: this method used for finding one or many document
- `findOne()`: this method use for finding one document
- `findById()`: this method use for finding one document with it's `__id`
- for mongoose : everything same

# Update

`updateOne()`, `updateMany()`, `findOneAndUpdate()`

- `updateOne()` this method used for update one document
- `updateMany()` this method used for update multiple document
- `findByIdAndUpdate()` this method used for updating one document
-

## Delete

`deleteOne()`, `deleteMany()`, `findOneAndDelete()`

- `deleteOne()` this method used for deleting one document
- `deleteMany()` this method used for deleting multiple document
- `findOneAndDelete()` this method used for deleting one document
