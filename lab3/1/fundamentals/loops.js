let i = 3;

while (i) {
    alert( i-- );
}
//last is 1, because after we do 1--, it becomes 0 and doesnt enter the while

let i = 0;
while (++i < 5) alert( i ); // 1..4

let i = 0;
while (i++ < 5) alert( i ); //1..5

for (let i = 0; i < 5; ++i) alert( i ); //0..4

for (let i = 0; i < 5; i++) alert( i ); //0..4


for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}

let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}

let num;

do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


let n = 10;

for (let i = 2; i <= n; i++) {
    let cnt = 0;
    for (let j = 2; j < i; j++) { 
        if (i % j == 0){
            cnt++;
            break;
        }
    }

    if (!cnt) alert( i );
}