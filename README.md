# Objects and Arrays Implementation

## Introduction
We will be putting into practice the concepts we have learned throughout the day. We will be building a small application that will create products and keep track of an inventory of said products.

## setup
1. Change directory ```(cd)``` into your ```wyncode``` folder
3. Change directory into ```js-implementation/objects-arrays```.
5. Once that's done type ```npm run test```. You will most likely see a couple of errors, and that's totally fine considering that we have not written any code.
6. As soon as you start writing your functions you'll start seeing how some of the tests start passing.

## Instructions.
1. In ```exercises/product.js``` Declare a factory ```function``` named products. This ```function``` has 3 ```parameters```: name, brand, quantity. name and brand should always be ```strings```. quantity will be a ```number```. quantity will have a default value of ```0```. Every new object should also have a property named ```inStock``` which is a boolean. If ```quantity``` is less or equals to 0 ```inStock``` will have a value of ```false``` otherwise, ```inStock``` will have a value of ```true```.
2. Declare an empty array named ```productArr``` in  ```exercises/product.js```. Every time we create a new object we want to push said object into that array.
3. In ```exercises/powerOf.js``` declare a ```function``` named ```powerOf``` that takes two parameters named ```numberArray``` and ```power```.   This function will use ```map``` to iterate over the ```numberArray``` and create a new array that contains each element in ```numberArray``` to the power of ```power```