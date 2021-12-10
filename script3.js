class Pessoa{
    constructor(nome,sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    falar(){
        console.log(`${this.nome} ${this.sobrenome} está falando "Olá"!`);
    }

};

const p1 = new Pessoa('Luiz', 'De Melo', 18);
p1.falar();