// Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.

// Crie uma função podeSubir() que receba dois parâmetros: 
// -altura da pessoa;
// -se está acompanhada.

// Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
// - A pessoa deve medir mais de 1.40m e menos de 2 metros.
// - Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
// - Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.

// Modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização ou de impedimento no acesso ao brinquedo dependendo se a pessoa se enquadra ou não nas condições do exercício anterior. Por exemplo:
// - Em caso de autorização, exiba a mensagem: “Acesso autorizado” ou “Acesso autorizado somente com acompanhante”;
// - Em caso de impedimento, exiba a mensagem: “Acesso negado.”

function podeSubir(altura,acompanhado){
if (altura<=1.20){
    return console.log("Acesso Negado")    
} else if(altura<=1.40 && acompanhado){
    return console.log("Acesso Autorizado somente com acompanhante")
}else if(altura>1.40 && altura<=2){
    return console.log("Acesso Autorizado")
}else {
    return console.log("Acesso Negado")
}
}
podeSubir(1.4,false)

