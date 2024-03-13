const { fizzBuzz } = require('./fizz-buzz');
describe('fizzBuzz', () =>{
    it('if the number is divisible by 3 and 5, return "FizzBuzz"', () =>{
        expect(fizzBuzz(15)).toEqual('FizzBuzz')
    })
    it('if the number is divisible by 3, return "Fizz"' , () => {
        expect(fizzBuzz(3)).toEqual("Fizz")
    })
    it('if the number is divisible by 5, return "Buzz"', () => {
        expect(fizzBuzz(5)).toEqual("Buzz")
    })
    it('if the number is not divisible by 3 and 5, return the "number"', () =>{
        expect(fizzBuzz(11)).toEqual(11)
    })
       
})
// 1. write a describe to contain our tests
// 2. add a first test. You could use one of the console.log tests in the other file as a starting point
// 3. run the test with `npm test` to see if it passes
// 4. add another test, and another, and another, until you've tested all the functionality of the fizzBuzz function
