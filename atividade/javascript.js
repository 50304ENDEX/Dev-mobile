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
console.log(`${x} é ${maiorq} ${y}`);

    //Exercício 3: Estruturas de Controle
/*
    Crie um script que receba uma idade e verifique se a pessoa é:
    1. Menor de idade.
    2. Maior de idade.
    3. Idosa (idade >= 65).

    Utilize a idade 70 para os testes.
*/
let idade = 11
    switch(idade){
        case idade < 18:
            console.log("menor de idade");
        break
        case idade > 18:
            console.log("maior de idade");
        break
        case idade >= 65:
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
let numeros = [10, 20, 30, 40, 50]

//1. Adicione um número ao final do array.
numeros.push(60)
console.log(numeros)
//2. Remova o primeiro número do array.
numeros.pop()
console.log(numeros)
//3. Encontre o maior número do array.
console.log(Math.max(...numeros))
//4. Encontre o menor número do array.
console.log(Math.min(...numeros))

    //Exercício 7: Métodos de Arrays
let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"]

//1. Converta todas as strings para maiúsculas.
console.log(frutas.map(fruta => fruta.toUpperCase()))
//2. Filtre as strings que começam com a letra 'A'.
const frutasFiltradas = frutas.filter(frutas => frutas.startsWith("b"))
console.log(frutasFiltradas)
//3. Crie um novo array com o comprimento de cada string.
console.log(frutas.map(frutas => frutas.length))



    //Exercício 8: Objetos
const pessoa = { nome: "Carlos", idade: 28, cidade: "São Paulo" }

//1. Adicione uma nova propriedade ao objeto.
pessoa.email = "test@teste.com.br"
console.log(pessoa);
//2. Remova uma propriedade do objeto.
console.log(Object.keys(pessoa));
//3. Liste todas as propriedades do objeto.
delete pessoa.cidade
console.log(pessoa)

    //Exercício 9: Desestruturação de Objetos
let livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 }

//1. Desestruture o título e o autor do objeto.
const {titulo, autor} = livro
console.log(`${titulo} foi escrito por ${autor}`)

//2. Crie uma função que receba o objeto e retorne uma string com o título e o autor.
function livroInfo(livro){
    const {titulo, autor} = livro   
}
console.log(livroInfo(livro))
    //Exercício 10: Funções e Arrays
    let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 //1. Filtre os números pares.
    console.log(numero.filter(numero => numero % 2 === 0))
//2. Multiplique cada número por 2.
    console.log(numero.map(numero => numero * 2))
//3. Calcule a soma de todos os números obtidos.

    console.log(numero.reduce((acc, numero) => acc + numero, 0))
