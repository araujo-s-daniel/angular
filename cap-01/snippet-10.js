nomes = ['Jorge', 'Carlos', 'Roberto', 'Lucas'];

novoNome = nomes.filter(function(nome) {
    return nome.includes('a');
});

console.log(novoNome);

