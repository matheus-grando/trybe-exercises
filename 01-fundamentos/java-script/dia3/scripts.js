// EXERCÍCIO DA AULA AO VIVO
// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

let sum = 0;
let numbers =[];

for(let index = 1; index <= 50; index += 1){
    sum += index;
}
console.log('A soma total de 1 a 50 é: ' + sum);

// 2-

let contagem = 0;
let divi3 = 0;
for(let index1 = 2; index1 <= 150; index1 +=1){
    if (index1 % 3 === 0){
        contagem +=1;
    }
}
if (contagem === 50){
    console.log(contagem + ' uma menagem secreta');
}

// 3-//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 



// 4-//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

// 5-//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.






