/*
creare un array con nomi inventati
creare un array con cognomi inventati
creare un array vuoto
creare un generatore random di numeri per i nomi
creare un generatore random di numeri per i cognomi

*/

const randomNames = ['Antonio', 'Giorgio', 'Paolo', 'Francesca', 'Fabio'];

const randomSurnames = ['Spada', 'Rossi', 'Vinci', 'Ferro', 'Campo'];

const randomInvented = [];


for (let i = 0; i < randomNames.length; i++) {
    const randomNumberNames = Math.floor(Math.random() * 5);
    console.log(randomNumberNames);
    
    const randomNumberSurnames = Math.floor(Math.random() * 5);
    console.log(randomNumberSurnames);
    

    randomNames[randomNumberNames];

    randomSurnames[randomNumberSurnames];
}

