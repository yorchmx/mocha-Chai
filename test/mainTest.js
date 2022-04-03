const assert = require('chai').assert;
const main = require('../main.js');

//Results
const helloWorldText = main.helloWorld();
const subtractionResult = main.subtraction(4,2);
const arrayOfNumbers = main.arrayOfNumbers();

describe('Main Suite', function(){

    describe('Hello World Method - Test Cases', function(){
        it('Hello World text is a expected', function(){
            assert.equal(helloWorldText, 'hello world');
        });
        it('Validate date type', function(){
            assert.typeOf(helloWorldText, 'string', 'The expectated data type is a string')
        });
    });

    describe('Subtraction Method - Test Cases', function(){
        it('Less than 5', function(){
            assert.isBelow(subtractionResult, 5);
        });
        it('Validate date type', function(){
            assert.typeOf(subtractionResult, 'number', 'The expectated data type is a number')

        });

    });

    describe('Array Method - Test Cases', function(){
        it('Array includes number 5', function(){
            assert.include(arrayOfNumbers,  5);
        });
        it('Validate array date', function(){
            assert.lengthOf(arrayOfNumbers, 6)

        });

    });
});