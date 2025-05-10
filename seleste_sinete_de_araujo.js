
/* Aprofunda Preta Lab */



/* Imprimindo Números Pares
1) Crie uma função que receba um número inteiro N e imprima todos os números pares de 0 até N. Entrada: imprimePares(10) Saída: */


function Pares(N) {
  for (let num = 0; num <= N; num++) {
    if (num % 2 === 0) {
      console.log("Número par:" + num);
    }
  }
}

// *exemplo N =10 */
Pares(10);

/* Soma dos Números de um Array
 2)  Crie uma função que receba um array de números e retorne a soma de todos os elementos. Entrada: somaArray([1, 2, 3, 4, 5]) Saída: 15
*/

const numeros = [1, 2, 3, 4, 5];
const resultado = somar(numeros);
function somar(num) {
  let soma = 0;
  for (let i = 0; i < num.length; i++) {
    soma += num[i];
  }
  return soma;
}

console.log("A soma dos números é: " + resultado);



/* 3) Identificar Número Primo
 Descrição: Crie uma função que receba um número inteiro e retorne true se for primo e false caso contrário. Entrada: ePrimo(7), ePrimo(10) Saída: true, false */

function Primo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(Primo(7));
console.log(Primo(10));

/*4 FizzBuzz
Descrição: Crie uma função que imprima números de 1 a 50, substituindo múltiplos de 3 por "Fizz", múltiplos de 5 por "Buzz" e múltiplos de ambos por "FizzBuzz". Entrada: fizzBuzz() Saída: */

function fizzBuzz() {
  for (let i = 1; i <= 50; i++) {
    let num = "";
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        num = "FizzBuzz";
        break;
      case i % 3 === 0:
        num = "Fizz";
        break;
      case i % 5 === 0:
        num = "Buzz";
        break;
      default:
        num = i;
    }
    console.log(num);
  }
}

fizzBuzz();


/* 5) Crie uma função que receba uma string e retorne a quantidade de vogais nela. Entrada: contaVogais("Node.js é incrível") Saída: 7 */

function fizzBuzz() {
  for (let i = 1; i <= 50; i++) {
    let num = "";
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        num = "FizzBuzz";
        break;
      case i % 3 === 0:
        num = "Fizz";
        break;
      case i % 5 === 0:
        num = "Buzz";
        break;
      default:
        num = i;
    }
    console.log(num);
  }
}

fizzBuzz();


/*function contadorVogais(str) {
  const vogais = 'aeiouAEIOU';
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    if (vogais.indexOf(str[i]) !== -1) {
      contador++;
    }
  }

  return contador;
}

// Exemplos de uso:
console.log("Número de vogais em 'Node.js é incrível':", contadorVogais("Node.js é incrível"))



/* 6) Descrição: Crie uma função que receba um número e imprima a sua tabuada de 1 a 10. Entrada: tabuada(5) Saída: */

function tabuada(numero) {

  if (numero >= 1) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  } else {
    console.log("Entrada inválido, insira número maior ou igual a 1.");
  }
}
tabuada(5);

/* 7) Descrição: Crie uma função que receba uma string e retorne a mesma string invertida. Entrada: inverteString("hello") Saída: "olleh" */

function inverteString(str) {
  if (typeof str !== 'string') {
    return "Entrada inválida. Por favor, forneça uma string.";
  }
  return str.split('').reverse().join('');
}

console.log("Invertendo 'hello':", inverteString("hello"));

/* 8)Descrição: Crie uma função que receba um array de números e retorne o maior número presente nele. Entrada: maiorNumero([3, 10, 6, 2]) Saída: 10 */

function maiorNumero(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    return "Entrada inválida. Por favor, forneça um array não vazio de números.";
  }

  let maior = numeros[0]; // Assume que o primeiro número é o maior inicialmente.
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i]; // Atualiza o maior se encontrar um número maior.
    }
  }
  return maior;
}


console.log("Maior número em [3, 10, 6, 2]:", maiorNumero([3, 10, 6, 2]));


/* 9)  Crie uma função que receba uma string e retorne true se ela for um palíndromo e false caso contrário. Entrada: ePalindromo("Ame a ema"), ePalindromo("Olá mundo") Saída: true, false */

function Palindromo(str) {
  if (typeof str !== 'string') {
    return false;
  }

  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr;
}

console.log("É palíndromo 'Ame a ema':", Palindromo("Ame a ema"));

/* 10) Descrição: Crie uma função que receba um array de notas e retorne se a média é "Aprovado" (≥7) ou "Reprovado" (<7). Entrada: calculaMedia([8, 7, 6]), calculaMedia([5, 6, 4]) Saída: "Aprovado - Média: 7.0", "Reprovado - Média: 5.0" */

function calculaMedia(notas) {
  if (!Array.isArray(notas) || notas.length === 0) {
    return "Entrada inválida. Por favor, forneça um array não vazio de notas.";
  }

  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    if (typeof notas[i] !== 'number') {
      return "Entrada inválida. O array deve conter apenas números.";
    }
    soma += notas[i];
  }

  const media = soma / notas.length;
  const resultado = media >= 7 ? "Aprovado" : "Reprovado";
  return `${resultado} - Média: ${media.toFixed(1)}`;
}


console.log(calculaMedia([8, 7, 6]));    