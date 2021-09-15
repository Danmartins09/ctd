// let clienteNovo = {
//     numeroDaConta:5486273622,
//     tipoDaConta:'Conta Corrente'

// };



function Conta(numeroDaConta, tipoDaConta, saldo, titular){
    this.numeroDaConta = numeroDaConta;
    this.tipoDaConta = tipoDaConta;
    this.saldo = saldo;
    this.titular = titular;
};

let cliente1 = new Conta(5486273622, 'Conta Corrente', 27771, 'Abigael Natte')
let cliente2 = new Conta(1183971869, 'Conta Poupança', 8675, 'Ramon Connell')
let cliente3 = new Conta(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente')
let cliente4 = new Conta(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley')
let cliente5 = new Conta(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer')
let cliente6 = new Conta(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus')
let cliente7 = new Conta(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour')
let cliente8 = new Conta(185979521, 'Conta Poupança', 25994, 'Lonnie Verheijden')
let cliente9 = new Conta(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan')
let cliente10 = new Conta(2138105881, 'Conta Poupança', 33196, 'Bendite Huggett')

let clientList = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10]

let banco = {
    clientes: clientList,
    consultarCliente: function(){
        return console.log(this.clientes.includes(clientList.includes(this.titular)) ? this.titular : 'Cliente não existe');
    } 
}

console.log(banco.consultarCliente('Ramon Connel'))

// let banco = {
//     clientes: clientList,
//     consultarCliente: function(usuario){
//         return console.log(this.clientes.includes(usuario) ? usuario : 'Cliente não existe');
//     } 
// }

// console.log(banco.consultarCliente(cliente1))