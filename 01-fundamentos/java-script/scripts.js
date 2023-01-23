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

let num1 = 9;
let num2 = 3;
let num3 = 73;
let isEven = false;

if( (num1 % 2 ===0 || num2 % 2===0 || num3 % 2 ===0)) {
    isEven = true;
}
console.log(isEven);

let numero1 = 9;
let numero2 = 3;
let numero3 = 73;
let isOdd = false;

if( (numero1 % 2 !==0 || numero2 % 2 !==0 || numero3 % 2 !==0 ) ) {
    isOdd = true;
}
console.log(isOdd);

let custo = 10;
let venda = 30;
let custoTotal;
let lucro;

if (custo >= 0 && venda >= 0) {
    let custoTotal = custo * 1.2;
    let lucro = (venda - custoTotal) * 1000;
    console.log(lucro);
}
else{
    console.log('Erro, encerrando programa.')
}