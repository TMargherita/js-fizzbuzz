//1. Scrivi un programma che stampi i numeri da 1 a 100
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      //2.per i multipli di 3 stampi "Fizz" al posto del numero
        console.log(i + ' ' + 'Fizz');
    } else if (i % 5 == 0) {
      //3.per i multipli di 5 stampi Buzz.
        console.log(i + ' ' +  'Buzz');
    } else if (i % 15 == 0) {
      //4.Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
        console.log(i +  ' ' + 'Fizz' +  ' ' + 'Buzz');
    } else {
        console.log(i);
    }
}
