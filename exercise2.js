
const myArray = ['comida','bebida','postre','desayuno'];
let longestElement = '';

myArray.forEach( element => {
    if( element.length >= longestElement.length ){
        longestElement = element;
    }
})
console.log( longestElement );