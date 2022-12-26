const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);

/* um Set não podem se repetir. O que é ótimo para nos ajudar nesse desafio. 


Ducemnetação do Set:  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set

Outra forma de escrever o codigo acima seria desta forma abaixop 
*/

const nome = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizado = [...new Set(nomes)];

console.log(nomesAtualizados);