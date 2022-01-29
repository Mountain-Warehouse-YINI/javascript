const challenge2 = require("../challenges/Challenge2");

const Challenge2_TestCases = [
    { numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expectedResult: 1 },
    { numbers: [1, 2, -3, 4], expectedResult: -3 },
    { numbers: [(Number.MIN_VALUE), (Number.MIN_VALUE), 1, 2, -3, 4], expectedResult: (-3)},
    { numbers: [0, 0, 0, 0, 0], expectedResult: 0 },
    { numbers: [Number.MAX_VALUE], expectedResult: Number.MAX_VALUE },
    { numbers: [], expectedResult: 0 },
    { numbers: [Number.MAX_VALUE - 1], expectedResult: Number.MAX_VALUE - 1 }
];

describe('Challenge2_ReturnSmallestValueInArray_ShouldReturnValue', () =>
    Challenge2_TestCases.forEach(t =>
        test('Challenge2_ReturnSmallestValueInArray', () =>
            expect(challenge2.ReturnSmallestValueInArray(t.numbers)).toBe(t.expectedResult)
        )));