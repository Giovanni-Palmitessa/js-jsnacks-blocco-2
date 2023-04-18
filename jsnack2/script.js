/*
creare un array con nomi inventati
creare un array con cognomi inventati
creare un array vuoto

*/

const randomNames = ['Antonio', 'Giorgio', 'Paolo', 'Francesca', 'Fabio'];

const randomSurnames = ['Spada', 'Rossi', 'Vinci', 'Ferro', 'Campo'];

const randomInvented = [];

const randomInvited = Math.floor(Math.random() * (randomNames[5] - randomNames[0] + 1) ) + randomNames[0];
console.log(randomInvited);
