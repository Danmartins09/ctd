function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;

    this.calcularMedia = function(){
        
        
        let somaDasNotas = notas.reduce((soma, i) => {

            return soma + i;

        });

        return somaDasNotas / this.notas.length; 
        

    };
        
    this.adicionarFalta = function(){
        return this.qtdFaltas++
    }
};

module.exports = Aluno;