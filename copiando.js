const notas = [7, 7, 8, 9];

const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);


/* Ao fazer uma atribuição direta como essa, usando o sinal de igual, o JavaScript entende que a partir desse momento, é como se esses dois arrays fossem o mesmo,
 como se eles apontassem para o mesmo endereço da memória.

Então, qualquer alteração que fizermos em novasNotas será feita no array original e vice-versa. É como se, para o JavaScript, eles fossem o mesmo array.
 E não é isso que queremos. */


 const nota = [7, 7, 8, 9];

const novaNotas = [...nota];            // [...nota, 10 ] funciona da msm forma que o codigo a esquerda

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

// assim conseguimos realmente copiar o array, desta forma que deve ser feita 