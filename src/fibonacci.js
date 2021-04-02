const fibonacciNumbers = (num) => {
    if (typeof(num) != "number") 
        return 'Passed argument is not a number';

    return num <= 1 ? num : fibonacciNumbers(num - 1) + fibonacciNumbers(num - 2)
};
module.exports = fibonacciNumbers;
