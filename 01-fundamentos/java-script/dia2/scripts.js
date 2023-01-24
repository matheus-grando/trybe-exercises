let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let sum =0;
for(let index = 0; index < numbers.length; index +=1){
    sum+= numbers[index];
}
console.log(sum);


console.log(numbers.length);
media = sum / 5;
console.log(media);


if (media > 20){
    console.log('Valor maior que 20.');
}else{
    console.log('Valor menor que 20.');
}


let higerNum = numbers[0];
for (let index = 1; index < numbers.length; index += 1){
    if( numbers[index] > higerNum ){
        higerNum = numbers[index];
    }
}
console.log(higerNum);

let odd = 0;
for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0){
        odd+= 1;
    }
}
if(odd === 0){
    console.log('Nenhum número ímpar.')
}else{
    console.log(odd);
}




let lowerV = numbers[0];
for (let index = 1; index < numbers.length; index +=1){
    if(numbers[index] < lowerV){
        lowerV = numbers[index];
    }
}
console.log(lowerV);


let numeros = [];
for (let index = 1; index <= 25; index +=1){
    numeros.push(index);
}
console.log(numeros);


for(let index = 0; index < numeros.length; index +=1){
    console.log(numeros[index] / 2);
}

