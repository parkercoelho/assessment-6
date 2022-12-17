const {shuffleArray} = require('./utils')
let testArray = [1,2,3,4,5]
let shuffledArray = shuffleArray.testArray


describe('shuffleArray debugger', () => {
    test('the shuffleArray function should return an array with the same number of elements', () => {
        expect(testArray.length).toEqual(shuffledArray.length)
    })

    test('the shufflearray function should shuffle an array', () => {
        expect(testArray[0]).not.toEqual(shuffledArray[0])
    })
    test('the testArray is working', () => {
        console.log(testArray)
        expect(testArray[0]).toEqual(1)
    })
})