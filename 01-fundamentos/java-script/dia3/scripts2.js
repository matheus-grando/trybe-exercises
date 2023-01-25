// Exercícios da plataforma on-line//

//.
let resultFat = 1;
for(let index = 10; index > 0; index -= 1){
    resultFat *= index;
}
console.log(resultFat);

//.

let word = 'tryber';
let reverseWord= '';
for ( let index = word.length - 1; index >= 0; index -=1 ) {
    reverseWord += word[index];
}
console.log(reverseWord);

//.
let bWord = array[0];
let sWord = array[0];

let array = ['java', 'javascript', 'python', 'html', 'css'];
for(index = 0; index < array.length; index+=1){
    if( array[index].length > bWord.length){
        bWord = array[index];
    }
}
for(index = 0; index < array.length; index+=1){
    if(array[index].length < sWord.length){
        sWord = array[index];
    }
}
console.log('Maior palavra é ' + bWord + ', e a menor palavra é '+ sWord);
