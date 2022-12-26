// funções call back são funcões que usamos como parametro de outra 

const nomes = ['julia', 'aghata' , 'joao' , 'giovnna' ];

nomes.forEach(function (nomes){

    console.log(nomes);

});

// função anonima pode ser chama como arow funcition no caso é essa função abaixo 

nomes.forEach((nomes) =>{

    console.log(nomes);

});


// tambem podemos fazer isso 

function imprime (nomes){

    console.log(nomes)

}

nomes.forEach(imprime); // sem parntese por que nn queremos o retorno dela e como vc pode ter percebido ela nn tem retorno
