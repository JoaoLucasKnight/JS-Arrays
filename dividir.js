const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos',
 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

console.log(nomes);

 const sala1 = nomes.slice(0, nomes.length/2);  // o metodo slice reparte um array mas nn o modifica assim como o pop e o push 
 const sala2 = nomes.slice(nomes.length/2);     // por isso deve ser salvo dentro de outra variavel

 console.log(sala1, sala2);
