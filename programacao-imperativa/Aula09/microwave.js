// Prática 01

function senha(pass){
    if(pass=='1234'){
        return console.log('Acesso Permitido')
    }else{
        return console.log('Acesso Negado')
    }
}
senha(1234)

// Prática 02

function compara(n1,n2){
    if(n1>n2){
        return console.log(n1 +' é maior que '+n2)
    }else if(n1==n2){
        console.log('Os números são iguais')
    }else{
        console.log(n2 +' é maior que '+n1)
    }
}
compara(8,5)

// Prática 03
let mes=10
switch (mes) {
    case 1:
      console.log('Janeiro')
      break;
    case 2:
      console.log('Fevereiro')
      break;
    case 3:
      console.log('Março')
      break;
    case 4:
      console.log('Abril')
    break;
    case 5:
      console.log('Maio')
      break;
    case 6:
      console.log('Junho')
      break;
    case 7:
      console.log('Julho')
      break;
    case 8:
      console.log('Agosto')
    break;
    case 9:
      console.log('Setembro')
      break;
    case 10:
      console.log('Outubro')
      break;
    case 11:
      console.log('Novembro')
      break;
    case 12:
      console.log('Dezembro')
    break;    
  }
  
// Prática 04
let num=12345
console.log(num=='1234' ? 'Acesso Permitido' : 'Acesso Negado');


//Exercício Microondas

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!"

var comida1 = 'pipoca';
var tempoPadraoPipoca = 10;

var comida2 = 'macarrao';
var tempoPadraoMacarrao = 8;

var comida3 = 'carne';
var tempoPadraoCarne = 15;

var comida4 = 'feijao';
var tempoPadraoFeijao = 12;

var comida5 = 'brigadeiro';
var tempoPadraoBrigadeiro = 8;

function preparoComida(comida, tempoDePreparo) {

    if(comida === comida1) {

        if(tempoDePreparo >= tempoPadraoPipoca * 2 && tempoDePreparo < tempoPadraoPipoca * 3) {

            console.log('A comida queimou');
    
        } else if(tempoDePreparo >= tempoPadraoPipoca * 3) {
    
            console.log('KABOOOM! 🔥');
    
        } else if(tempoDePreparo < tempoPadraoPipoca) {
    
            console.log('Tempo insuficiente');
    
        } else {
    
            console.log('Bom apetite');
    
        }

    }else if(comida === comida2) {

      if(tempoDePreparo >= tempoPadraoMacarrao * 2 && tempoDePreparo < tempoPadraoMacarrao * 3) {

          console.log('A comida queimou');
  
      } else if(tempoDePreparo >= tempoPadraoMacarrao * 3) {
  
          console.log('KABOOOM! 🔥');
  
      } else if(tempoDePreparo < tempoPadraoMacarrao) {
  
          console.log('Tempo insuficiente');
  
      } else {
  
          console.log('Bom apetite');
  
      }

    }else if(comida === comida3) {

    if(tempoDePreparo >= tempoPadraoCarne* 2 && tempoDePreparo < tempoPadraoCarne * 3) {

        console.log('A comida queimou');

    } else if(tempoDePreparo >= tempoPadraoCarne * 3) {

        console.log('KABOOOM! 🔥');

    } else if(tempoDePreparo < tempoPadraoCarne) {

        console.log('Tempo insuficiente');

    } else {

        console.log('Bom apetite');

    }
    }else if(comida === comida4) {

      if(tempoDePreparo >= tempoPadraoFeijao * 2 && tempoDePreparo < tempoPadraoFeijao * 3) {

          console.log('A comida queimou');
  
      } else if(tempoDePreparo >= tempoPadraoFeijao * 3) {
  
          console.log('KABOOOM! 🔥');
  
      } else if(tempoDePreparo < tempoPadraoFeijao) {
  
          console.log('Tempo insuficiente');
  
      } else {
  
          console.log('Bom apetite');
  
      }
    }else if (comida === comida5) {

        if(tempoDePreparo >= tempoPadraoBrigadeiro * 2 && tempoDePreparo < tempoPadraoBrigadeiro * 3) {
  
            console.log('A comida queimou');
    
        } else if(tempoDePreparo >= tempoPadraoBrigadeiro * 3) {
    
            console.log('KABOOOM! 🔥');
    
        } else if(tempoDePreparo < tempoPadraoBrigadeiro) {
    
            console.log('Tempo insuficiente');
    
        } else {
    
            console.log('Bom apetite');
    
        }
    }

    else {

        console.log('Prato inexistente');

    }

}

preparoComida(comida1, 30);