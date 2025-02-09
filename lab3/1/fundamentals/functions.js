function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?'); //works without else
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function min(a, b) {
    return a < b ? a : b;
}


function pow(x, n) {
    let result = x;

    for (;n; n >>= 1, x *= x) {
        if (n & 1) {
            result *= x;
        }
    }
    return result;
}

let x = prompt("x", '');
let n = prompt("n", '');

if (n < 1) {
    alert(`Wrong input`);
} else {
    alert( pow(x, n) );
}