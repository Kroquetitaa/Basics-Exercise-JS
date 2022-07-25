
const avengers = ['Spiderman', 'AntMan', 'Hulk'];
const mutants = ['Wolverine', 'Ciclops', 'Storm'];
const defenders = ['Daredevil', 'IronFist', 'Luke Cage'];

const calcListLength = list => {
    let myLength = 0;
    list.forEach(element => {
        myLength += element.length;
    });
    return myLength;
}
const avengersLength = calcListLength(avengers);
const mutantsLength = calcListLength(mutants);
const defendersLength = calcListLength(defenders);
console.log( avengersLength, mutantsLength, defendersLength );

const comparator = ( a, b, c ) => {
    if( a > b ){
        if ( a === c) return 'Empate entre a y c';
        if( a > c ){
            return 'a gana';
        } else {
            return 'c gana';
        }
    } else {
        if ( a == b ) return 'Empate entre a y b';
        if( b > c ) {
            return 'b gana';
        } else{
            return 'c gana';
        }
    }
}

console.log(comparator(avengersLength,mutantsLength, defendersLength));

let media = ( a, b, c) => {
    return (a + b + c) / 3;
}
console.log(media(avengersLength,mutantsLength, defendersLength));