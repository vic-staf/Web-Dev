let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

alert( 6.35.toFixed(1) ); //6.3 because 6.35 is actually 6.34999999999999964473


function readNumber() {
    let num;

    do {
        num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber()}`);

let i = 0;
while (i != 10) { //i is never 10 because of precision error
    i += 0.2;
}


function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );


function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

alert( randomInteger(1, 3) );