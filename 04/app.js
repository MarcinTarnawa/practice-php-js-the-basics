const arr = createArray(1, 100);
console.log(arr); // [1, 4, 34, 12, 16, 45, 12, 38, 78, 99, 1, 84, 44, 61, 16, 45, 33, 31, 68, 93 ]

const largest = getLargest(arr);
console.log(largest); // [99, 93, 84, 78, 68, 61, 45, 45, 44, 38]

const avg = getAvg(largest);
console.log(avg); // 3

function createArray(min, max) {
    const arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function getLargest(arr) {
    return arr.sort((b, a) => a - b).slice(0, 10);
}

function getAvg(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((a, b) => a + b) / arr.length;
}

const arr2 = createArray(10, 200);
const largest2 = getLargest(arr2);
const avg2 = getAvg(largest2);

console.log(arr2,largest2,avg2);