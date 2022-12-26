const notas = [10, 6.5, 8, 7.5];

for (let i= 0; i <notas.length; i++) {

    console.log(notas[i]);

};

// Essat estrutura acaima é exatamente igual a estrutura abaixo  ===

for (let elemento of notas){
    console.log(elemento);
};
