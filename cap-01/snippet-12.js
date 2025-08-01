nomes = ['Jorge', 'Carlos', 'Roberto', 'Lucas'];

novoNome = nomes.reduce((acumulado, nome) => acumulado + '-' + nome);

console.log(novoNome);

