class Pessoa {
	private nome: string;
	
	constructor(nome: string) {
		this.nome = nome;
	}
	
	dizOla(): string {
		return 'Olá, ' + this.nome;
	}
}

