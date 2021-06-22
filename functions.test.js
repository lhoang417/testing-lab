
const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions')

test('function should return 2', function(){
    expect(returnTwo()).toBe(2)
})

test('function should return a greeting', function(){
    expect(greeting('James')).toEqual('Hello, James')
})

test('function should return sum of two #s', function(){
    expect(add(4,5)).toBe(9)
})

test('function should return two #s multiplied', function(){
    expect(multiply(5,2)).toBe(10)
    expect(multiply(3,4)).toBe(12)
})

test('function should return two #s divided', function(){
    expect(divide(10,2)).toBe(5)
    expect(divide(20,5)).toBe(4)
})

test('function should return two #s subtracted', function(){
    expect(subtract(10,5)).not.toBe(2)
    expect(subtract(5,1)).not.toBeNaN()
})

describe('Math functions', function(){
    test('function should return two #s multiplied', function(){
        expect(multiply(5,2)).toBe(10)
        expect(multiply(3,4)).toBe(12)
    }),
    test('function should return two #s divided', function(){
        expect(divide(10,2)).toBe(5)
        expect(divide(20,5)).toBe(4)
    }),
    test('function should return two #s subtracted', function(){
        expect(subtract(10,5)).not.toBe(2)
        expect(subtract(5,1)).not.toBeNaN()
    }),
    test('function should return sum of two #s', function(){
        expect(add(4,5)).toBe(9)
    })
    
})