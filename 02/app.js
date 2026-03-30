const x = prompt('Podaj liczbę!');

if (x >= 1 && x < 10) {
    for (let i = 1; i < 10; i++) {
    console.log(x + ' x ' + i + ' = ' + i * x)
}}
else {
    console.log("Podaj liczbę od 1 do 9")
}