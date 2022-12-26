const alunos = ['joao', 'Giovann', 'julia', 'Aghata'];
const notas = [9, 10 , 7 , 8 ];


const alunosNotas = [alunos,notas];


function exibir (alunos){
    if(alunosNotas[0].includes(alunos)){ // O includes é um comparador de elementos dentro do arrray   // = a o indice do aluno dentro do array
        // const aluno = alunosNotas[0];
        // const media = alunosNotas[1]; é igual 
        
        const [aluno , media] = alunosNotas // e a mesma coisa do codigo acima digitado 

        
        const indice = aluno.indexOf(alunos); 

        const nota = media[indice];

        console.log (` ${alunos} tirou a nota ${nota}`);

    }else {
        console.log('Não existe esse aluno');
    }
}

exibir('Aghata');
