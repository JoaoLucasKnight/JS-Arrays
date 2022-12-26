const alunos = ['Aghata', 'julia', 'Vitor Emanuel', 'João', 'Giovanna'];
const notas = [3 , 8 , 9 , 10 , 5];


const reprovados = alunos.filter((_, indice)=> {  // no lugar do underline e qunado o primeiro nn se faz nescessario como por 
                                                  // exemplo aluno ai é aceitavel colocar um underline . até pq o primeiro parametro não pode ficar em branco 
 return notas[indice] < 6;
});

console.log(reprovados);
