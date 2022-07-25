
const foods = ['Hamburguesa','manzana','pizza','pasta','ensalada'];
const dieta = 'Te sirvo brocoli';

foods.forEach( e => {
    if( e.includes('pizza')){
        console.log( dieta );
    }
})