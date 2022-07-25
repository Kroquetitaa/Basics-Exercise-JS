
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