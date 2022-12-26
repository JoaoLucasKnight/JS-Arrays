const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(sala) {
    const soma = sala.reduce((acumulador , nota)=> {  // pode ser feito desta forma tbmm const soma = sala.reduce((acumulador , nota)=> acumulador + nota, 0); são ===
        return acumulador + nota;
    }, 0);

    const media = soma / sala.length;

    return media;
};

console.log(`A media da Sala JS: ${mediaSala(salaJS)}`);
console.log(`A media da Sala Java:  ${mediaSala(salaJava)}`);
console.log(`A media da SalaPython: ${mediaSala(salaPython)}`);