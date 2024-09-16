const prompt = require('prompt-sync');
 const entrada = prompt() ;

let idade = 17;
const anoNascimento  = 2006;
let anoAtual = 2024;
const nomeCompleto = "vinicius almeida";

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento +  " e no ano atual " + anoAtual + " completo " + idade + " anos");    

anoAtual = anoAtual + 1;


console.log(anoAtual);


idade = idade + 1;
console.log(idade);

//agencia de viagens;paris,nova york,londres,toquio,miami

const listaDeDestinos = new Array(
  " paris",
  " nova york",
  " londres",
  " toquio",
  " miami"
);


console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");


console.log(listaDeDestinos)

listaDeDestinos.push("curitiba");
listaDeDestinos.push("rio de janeiro");
listaDeDestinos.push("santos");
console.log(listaDeDestinos);



 var nomecomprador = entrada("digite seu nome?")
 var idadeComprador = entrada("qual a sua idade ?");

if(idadeComprador >= 18) {
  console.log(" Ola senhor(a)" + nomecomprador);
   console.log("Comprador maior de idade");
  console.log("destinos disponiveis: " + listaDeDestinos);
} else { 
  console.log("Não foi possivel realizar a compra ");

console.log(" vocÊ é menor de idade"); 
  console.log(" Ola senhor(a)" + nomecomprador);
  
}







