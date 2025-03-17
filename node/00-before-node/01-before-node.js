const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// find and element
const findWayOne = arr.indexOf(10);
const findWayTwo = arr.findIndex((item) => item === 10);
const findWayThree = arr.find((item) => item === 10);

// changing every element of an array
const mapMethod = arr.map((item) => item * 2);

// filter and element
const filterMethod = arr.filter((item) => item % 2 === 0);

// reduce and element
const reduceMethod = arr.reduce((acc, item) => acc + item, 0);

const obj = {
  name: "John",
  age: 30,
  isMarried: false,
  children: ["Alice", "Bob"],
};

// it will give us an array of keys
const keys = Object.keys(obj);
// it will give us an array of values
const values = Object.values(obj);
// it will give us every key and value inside and array
const entries = Object.entries(obj);

// object value change way in ES6 - it will give use new obj, it will not change the old obj
const newObj = {...obj, isMarried: true};
// it will change the old obj
const obj2 = (obj.isMarried = true);
// object value change way in ES5
const newObjOldWay = Object.assign({}, obj, {isMarried: true});
