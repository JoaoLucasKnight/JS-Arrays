const notas = [10 , 6 , 8];

notas.push(7); // o push coloca um novo elento dentro do array 

// notas.pop() esse metodo remove um elemento do array   

const media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length;

console.log (media);


/* Para remover um nome do meio da lista usa o  metodo splice 

array.splice (1,2)  
0 "1" o numero do indice que vai ser retirado
O "2 " a quantidade de elementos vai ser removido a partir do indice declarado "1" 
*/
