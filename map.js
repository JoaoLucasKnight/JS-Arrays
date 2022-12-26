// map é outra função de arrays porém ele é ultilizado para incrementar array como no exemplo abaixo 

const notas = [10, 9.5, 8 , 7, 6];

const updateNotas = notas.map((nota)=> {            // o map incrmenta o valor mas não altera o array em si por isso é nescessario salvar em uma variavel 
    return nota + 1  >= 10 ? 10  : nota + 1 ;       // operador ternario 
});



 updateNotas = notas.map((nota)=>  nota + 1  >= 10 ? 10  : nota + 1 );  // essa é outra forma de escrever uma função arow quando ela retorna algo 


console.log(updateNotas);