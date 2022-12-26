const numeros = [10, 6.5, 8, 7.5];

let soma = 0 ;

for(let i = 0; i < numeros.length ; i++) {

    soma = soma + numeros[i];

};

console.log(soma/numeros.length); 

// Essat estrutura acaima é exatamente igual a estrutura abaixo  ===

 for (let elemento of numeros){
    soma = soma + elemento;
};

console.log(soma/numeros.length); 

// A esturura abaixo é uma função muito parecida com as e cimas 

numeros.forEach((elemento) => {

    soma = soma + elemento;    // pode ser usado soma += elemento

});

console.log(soma/numeros.length);

// o forEache é mais funcionaol e mais poderoso 