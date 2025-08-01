function juntarNome(nome: string, sobrenome?: string): string {
	if (sobrenome) {
		return nome + ' ' + sobrenome;
	} else {
		return nome;
	}
}

