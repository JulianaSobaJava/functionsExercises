function Conta(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.consultar();
}

Conta.prototype.consultar = function(){
    console.log(`Agência/Conta: ${this.agencia}/${this.conta} | Saldo:${this.saldo.toFixed(2)}`);
    
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.consultar();
    
};

function contaCorrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite;
}

contaCorrente.prototype = Object.create(Conta.prototype);
contaCorrente.prototype.constructor = contaCorrente;

contaCorrente.prototype.sacar = function(valor){
        if(valor > (this.saldo+ this.limite)){
            console.log(`Saldo insuficiente: ${this.saldo}`);
            return;
        }
        this.saldo -= valor;
        this.consultar();
    }
