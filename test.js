function calculate(operator, number1, number2) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 != 0) {
                result = number1 / number2;
            } else {
                throw new Error("You can't divide by 0!");
            }
            break;
        default:
            throw new Error('Invalid operator!');
    }

    return result;
}

const calculate = require('./calculate'); // assuming the function is exported from calculate.js

test('adds 1 + 2 to equal 3', () => {
    expect(calculate('+', 1, 2)).toBe(3);
});