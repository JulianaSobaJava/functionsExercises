const falar = {
    falar(){
    console.log(`${this.nome} está falando`);
 }, 
};

const beber = {
    beber(){
    console.log(`${this.nome} está bebendo`);
 }, 
};


const pessoaPrototype = Object.assign({}, falar, beber);


function criarPessoa(nome,sobrenome,idade){
    return Object.create(pessoaPrototype,{
        nome:{value:nome},
        sobrenome:{value:sobrenome},
        idade:{value:idade}
    });
}

const p1 = criarPessoa('Juliana', 'Soba', 19);
p1.falar();

//factory function e prototype;