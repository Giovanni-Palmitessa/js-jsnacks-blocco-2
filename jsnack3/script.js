/*
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

/*
creare un array di numeri
sommare solo quelli in posizione dispari
stampare i numeri dispari
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 11, 12, 13, 14, 15]

for (let i = 1; i < numbers.length; i = i + 2) {
    console.log(numbers[i]);
}

