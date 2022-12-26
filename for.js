const numeros = [100, 200, 300, 400, 500, 600];

const num = 700
var teste = 0

for (let i = 0 ;i < numeros.length; i++)  {
    if (num === numeros[i]){
        console.log(i)
        teste = 1;
    }

}

if (teste === 0 ){
    console.log(`O numero  ${num} não existe dentro do array `)
}


// ----- Estrutura do For -------
/* 
* 1 - é executada apensa uma unica ve z
* 2 - condição (true or false )
* 3 - executado ao fim od bloco 
*/