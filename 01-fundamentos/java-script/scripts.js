let a = 13;
let b = 45;
let c = 4;
let num = 13;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
    console.log( 'A é maior que B' );
}
else if (a < b) {
    console.log('B é maior que A');
}
else {
    console.log('Os numeros são iguais.');
}

if (a > b && a > c) {
    console.log( a + ' é o maior número');
}
else if (b > a && b > c) {
    console.log( b + ' é o maior número');
}
else {
    console.log( c + ' é o maior número')
}

if (num % 2 === 0) {
    console.log('positive');
}
else if (num % 2 !== 0) {
    console.log('negative');
}
else{
    console.log('zero');
}

let angulo1= 70;
let angulo2= 80;
let angulo3= -30;

if (angulo1 + angulo2 + angulo3 === 180) {
    console.log('true');
}
else if (angulo1 || angulo2 || angulo3 < 0){
    console.log('erro');
}
else{
    console.log('false');
}
