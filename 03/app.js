const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c)
{   numA = parseInt(a);
    numB = parseInt(b);
    numC = parseInt(c);

    const sortedNumbers = [numA, numB, numC].sort((x, y) => y - x);
    const result = sortedNumbers[0] + sortedNumbers[1];

    return result;
}

console.log(getSum(a, b, c));

const isEven = function(value) {
    if (typeof value !== 'number') {
        return null;
    }

    return value % 2 === 0;
};

console.log(isEven(7));
console.log(isEven(22));

function showInfo(value, status) {
    switch (status) {
        case null:
            console.log(`Podany argument ${value} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${value} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${value} jest nieparzysty`);
            break;
        default:
            console.log("Nieprawidłowy drugi parametr");
    }
}

showInfo(7, isEven(7));
showInfo(22, isEven(22));

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}