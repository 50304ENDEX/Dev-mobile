//Exercício 1: Manipulação de Strings
let hello = "Hello World"

// 1. Converta a string para minúsculas.
let minusculo = hello.toLowerCase()
console.log(minusculo)
// 2. Converta a string para maiúsculas.
let maiusculo = hello.toUpperCase()
console.log(maiusculo)
// 3. Inverta a string.

// 4. Substitua todas as ocorrências de uma letra específica por outra.
let trocar = hello.replace("o", "9")
console.log(trocar)


//Exercício 2: Operadores Aritméticos e de Comparação
let x = 15
let y = 5

// 1. Some os dois números.
console.log(x + y)
// 2. Subtraia o segundo número do primeiro.
console.log(x-y)
// 3. Multiplique os dois números.
console.log(x*y)
// 4. Divida o primeiro número pelo segundo.
console.log(x/y)
// 5. Verifique se o primeiro número é maior que o segundo.
let maiorq = x >= y ? "maior que" : "menor que";
console.log(maiorq);

//Exercício 3: Estruturas de Controle
/*
    Crie um script que receba uma idade e verifique se a pessoa é:
    1. Menor de idade.
    2. Maior de idade.
    3. Idosa (idade >= 65).

    Utilize a idade 70 para os testes.
*/
let idade = 70
    switch(idade){
        case idade < 18:
            console.log("menor de idade");
        break
        case idade > 18 && idade <= 65:
            console.log("maior de idade");
        break
        default:
            console.log("Integrante da 3° idade")
    }

//Exercício 4: Laços de Repetição

for(let i = 1; i <= 100; i++){
    console.log(i)
}

//Exercício 5: Funções

//1. O dobro do número.
function dobro(x){
    return x*2
}
console.log(dobro(5));

//2. O triplo do número.
function triplo(x){
    return x*3
}
console.log(triplo(5));

//3. O quadrado do número.
function quadrado(x){
    return x**2
}
console.log(quadrado(5));


//Exercício 6: Arrays


//Exercício 7: Métodos de Arrays


//Exercício 8: Objetos
const pessoa = { nome: "Carlos", idade: 28, cidade: "São Paulo" }
pessoa.email = "test@teste.com.br"
console.log(pessoa);
console.log(Object.keys(pessoa));

delete pessoa.cidade
console.log(pessoa)

//Exercício 9: Desestruturação de Objetos


//Exercício 10: Funções e Arrays