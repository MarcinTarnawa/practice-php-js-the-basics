const a = '4.2';
const b = 9;
const c = 0.1;
const d = 0.2;
const e = NaN;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

console.log(a, b, c, d, e);

parseA = parseInt(a);

console.log(parseA);

sum = parseA + b + c + d;
subtraction = parseA - b - c - d;

console.log(sum);
console.log(subtraction);

console.log(sum.toFixed(2));
console.log(subtraction.toFixed(2));

if (sum > 5) {
    console.log("Liczba jest większa od 5");
} else {
    console.log("Liczba jest mniejsza lub równa 5");
}

if (subtraction > 5) {
    console.log("Liczba jest większa od 5");
} else {
    console.log("Liczba jest mniejsza lub równa 5");
}