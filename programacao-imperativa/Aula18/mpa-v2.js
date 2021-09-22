/*
    GRUPO:
    Daniel Martins
    Matheus Rodrigues
    Denis Galdino
*/

function Pessoas (sexo, altura){
    this.sexo = sexo;
    this.altura = altura;    
};

let pessoa1 = new Pessoas('Masculino', 1.80);
let pessoa2 = new Pessoas('Masculino', 1.90);
let pessoa3 = new Pessoas('Feminino', 1.50);
let pessoa4 = new Pessoas('Feminino', 1.70);
let pessoa5 = new Pessoas('Masculino', 1.85);
let pessoa6 = new Pessoas('Masculino', 1.95);
let pessoa7 = new Pessoas('Masculino', 1.75);
let pessoa8 = new Pessoas('Masculino', 1.60);
let pessoa9 = new Pessoas('Feminino', 1.50);
let pessoa10 = new Pessoas('Feminino', 1.80);
let pessoa11 = new Pessoas('Feminino', 1.50);
let pessoa12 = new Pessoas('Feminino', 1.45);
let pessoa13 = new Pessoas('Feminino', 1.40);
let pessoa14 = new Pessoas('Feminino', 1.70);
let pessoa15 = new Pessoas('Feminino', 1.55);

let dados = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6, pessoa7, pessoa8, pessoa9, pessoa10, pessoa11, pessoa12, pessoa13, pessoa14, pessoa15];

// maior altura
// menor altura

let maiorAltura = dados.sort((a,b) => {
    return b.altura - a.altura
})

let first = (maiorAltura[0]).altura;
let last = (maiorAltura[maiorAltura.length-1].altura);

console.log('Maior altura: ' + first)
console.log('Menor altura: '+ last)

// qtd de homens

let total = 0;
for (let i = 0; i < dados.length; i++) {
    if ((dados[i].sexo)=='Masculino'){
        total++;        
    }     
}
console.log('O número de homens é de :' + total);

 // media altura mulheres  
