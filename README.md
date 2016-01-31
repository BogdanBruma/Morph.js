# Morph.js
Create JavaScript polymorphic functions by arguments matching and validation using array-like syntax.

## Example:

```js

//defining some simple validations

function isString(x) {
    return String(x) === x;
}

function isNumber(x) {
    return Number(x) === x;
}

//out morphic function

var f = Morph([
    [isString],
    function(myString) {
        console.log(myString, 'is a string.');
    }
], [
    [isNumber],
    function(myNumber) {
        console.log(myNumber, 'is a number');
    }
]);

f(3); //3 is a number
f("test"); //"test" is a string
```

## Another example using multiple validations and parameters

```js
function isArray(x) {
    return Array.isArray(x);
}

function notEmpty(x) {
    return x.length !== 0;
}

var f = Morph([
    [isArray, notEmpty],
    function(myNotEmptyArray) {
        console.log(myNotEmptyArray, 'is not an empty array');
    }
], [
    [isNumber],
    [isString],
    function(myNumber, myString) {
        console.log(myNumber, 'is a number');
        console.log(myString, 'is a string');
    }
]);

f(['x', 'y']);  //["x", "y"] is not an empty array
f(5, 'test');   //5 is a number
                //"test" is a string
```
