class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome +' '+ this.sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }

}

const pessoa1 = new Pessoa('Juliana', 'Soba');
pessoa1.nomeCompleto = "João Ribeiro de Sousa";
console.log(pessoa1.nomeCompleto);

//getters e setters usando classes...