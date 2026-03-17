/*
comentario em blocos
*/

// comentario em linhas

// Variaveis - o que são?
// Palavras chaves para criar variaveis:
/*
const
let
var
*/

// Const -> Quando um valor não pode mudar (+ seguro)
const idade = 30; // caixinha idade recebe 30/ 30 anos.

// Let -> Quando o valor pode mudar (+ utilizado)
let nome = "Lucas";

// Var ->  Forma antiga de declarar variaveis (Evitar usar)
var cidade = "São Caetano Do Sul";

/* imprimir valores
console.log(idade);
console.log(nome);
console.log(cidade);
*/
// Alterando valores
console.log(nome);
nome = "Carlos"
console.log(nome);

/*
let tamanho; // permite criar variavel vazia
 const cor; // nao permite criar variavel vazia
*/

// Interpolação
console.log(`Meu nome é ${nome}, Tenho ${idade}`)
console.log("Juntando nome " + nome +  " com idade " + idade)
// Tipos primitivos

// 1. string (textos em geral)
let mensagem = "olá mundo!"
console.log(typeof mensagem); // imprime o tipo do dado typeof

// 2. Number (Armazena numeros inteiros ou decimais)
let quantidade = 5; // numero inteiro
let temperatura = 36.5; // numero decimal 
console.log(typeof quantidade)

// 3. Boolean true/false (Verdadeiro ou falso)
let estáChovendo = true;
let temSol = false;
console.log(typeof temSol)

// 4. Undefined - variavel ainda nao recebeu um valor
let pedido;
console.log(typeof pedido);

// 5. Null - Usado para representar ausencia intencional de valor
let endereço = null;
console.log(typeof endereço);

// Conversão de tipos 

// Conversão implícita (automatica)
console.log("5" + 3) // concatenação - 53 (tipo number)
console.log("4" - 3) // calculo 2 (tipo number)

// conversão explicita (manual)

// converter para numero:
let numero = "42"; // string 
console.log(typeof numero)
let numeroConvertido = Number(numero); // converteu para number
console.log(typeof numeroConvertido);

// converter para string

let num = 100;
console.log(typeof num);

let texto = String(num); // convertendo o numero para texto
console.log(typeof texto);

// // converter booleano para numero 
// let trueConvertido = Number(true)
// console.log(trueConvertido)

// let falseConvertido = Number(false)
// conseole.log(falseConvertido)

// Operadores relacionais 
// servem para comparar valores 

/*
> maior que 
< menor que 
>= maior ou igual
<= menor ou igual 
== igualdade (ignora o tipo)
=== igualdade (verifica o tipo)
!= diferente (ignora o tipo)
!== diferente (verifica o tipo)
*/

// exemplos:  
console.log(10 > 5);
console.log(10 < 5);

// diferença entre == e ===
console.log(5== "5") // ignora o tipo(true)
console.log(5==="5") // verifica o tipo(false)

// operadores matemáticos 
// são usados para fazer calculos - como soma, multiplicação, etc.
/*
    + soma
    - subtração 
    * multiplicação
    / divisão 
    % resto da divisão 
    ** potencia 
*/

// exemplos: 
let a = 10
let b = 5 

console.log(a + b) // soma 
console.log(a - b) // subtração
console.log(a * b) // multiplicação 
console.log(a / b) // divisão 

// exemplo: 
// operador de resto
console.log(10 % 3) // resto da divisao 

// operador de potencia 
console.log(2 ** 3)