import moment from "moment";

function calcularIdade(anoNascimento) {
  const anoAtual = moment().year();
  return anoAtual - anoNascimento;
}

const anoNascimento = 2005;
const idade = calcularIdade(anoNascimento);
console.log(`Você tem ${idade} anos de idade.`);