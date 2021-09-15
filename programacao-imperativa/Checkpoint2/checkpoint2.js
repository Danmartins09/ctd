function soma(a=1, b=3) {
    return a + b;
}

console.log(soma());
console.log(soma(3));
console.log(soma(1, 2));


///ex3
let numeros= [10, 8, 7, 99, 0, 1, 6]

console.log(numeros.sort(function(a,b){ return a-b;}));
console.log(numeros.sort(function(a,b){ return b-a;}));


//ex4
var z=0;

for (var i=20; i<50; i+=10){
    z+=i;
}

console.log(z);

// ex6
let frutasAmarelas=['Melão', 'Mamão', 'Limão siciliano'];
let frutasVermelhas=['Melão', 'Cereja', 'Maçã red'];
let frutasVerdes=['Limão', 'Kiwi', 'Maçã verde'];

let frutasVermelhas1=frutasVermelhas.map(fruta => fruta.toUpperCase());
let todasFrutas=[...frutasAmarelas,...frutasVermelhas1,...frutasVerdes];
console.log(todasFrutas);

// ex7

let valor=5;
let fatorial=1;
for (let a = valor; a > 1; a--){
    fatorial*=a;
}
console.log('Fatorial= ' +fatorial);

// ex13
let x=5;
let y = x++ + ++x;
console.log('y= ' +y);

x=3;
y=x*(x +1)*x++;
x=5;
y=3;
y*= x+1
console.log('x= '+x);
console.log('y= '+y);

// ex15
for (var n=0; n<50; n+=10){
    console.log(n);
}
console.log(n);

// ex18
function soletrar(texto){
    console.log(texto.replace('-','').toLocaleUpperCase().split("").join("-"));
}

soletrar('digital-house');
soletrar('ctd');
