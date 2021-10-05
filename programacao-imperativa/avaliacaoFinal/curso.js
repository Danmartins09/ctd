const Aluno = require('./principal2');
const listaDeAlunos = require('./listaDeAlunos')

const curso = {
    nomeDoCurso: 'Programação Imperativa',
    notaDeAprovacao: 4,
    maxFaltas: 4,
    aluno: [],    

    adicionarAluno(estudante) {
        this.aluno.push(estudante);
    },
    
    aprovarAluno(estudante) {
        if(estudante.calcularMedia() >= this.notaDeAprovacao && estudante.qtdFaltas < this.maxFaltas) {

            return true;

        } else if (estudante.qtdFaltas===this.maxFaltas && estudante.calcularMedia()>(estudante.calcularMedia()*.1)){
            
            return true;

        }else {
            return false;
        }
    },

    resultadoFinal(aluno = this.aluno) {
        
        let listaFinal = [];

        aluno.forEach(estudante =>{
            listaFinal.push(estudante.nome + " " + this.aprovarAluno(estudante));
        });
        return listaFinal;
    }
};

listaDeAlunos.forEach((posicao) => {
    curso.adicionarAluno(new Aluno (posicao.nome, posicao.qtdFaltas, posicao.notas));
});

curso.aluno.forEach((element) => {
    curso.aprovarAluno(element);
});

console.log(curso.resultadoFinal());


