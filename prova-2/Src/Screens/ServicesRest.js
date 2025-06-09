import AsyncStorage from '@react-native-async-storage/async-storage';

//listagem de itens do cardápio
async function listar() {
  const jsonValue = await AsyncStorage.getItem('@itens_cardapio');
  return jsonValue != null ? JSON.parse(jsonValue) : [];
}

// salvar itens no cardápio
async function salvar(item) {
  item.id = new Date().getTime(); // gera ID único
  const itens = await listar();
  itens.push(item);
  await AsyncStorage.setItem('@itens_cardapio', JSON.stringify(itens));
}

// buscar um item específico pelo ID
async function buscar(id) {
  const itens = await listar();
  return itens.find(item => item.id === id);
}

// remover um item do cardápio pelo ID
async function remover(id) {
  const itens = await listar();
  const novaLista = itens.filter(item => item.id !== id);
  await AsyncStorage.setItem('@itens_cardapio', JSON.stringify(novaLista));
}

// atualizar um item do cardápio
async function atualizar(itemAtualizado) {
  const itens = await listar();
  const novaLista = itens.map(item =>item.id === itemAtualizado.id ? itemAtualizado : item);
  await AsyncStorage.setItem('@itens_cardapio', JSON.stringify(novaLista));
}

export default {
  listar,
  salvar,
  buscar,
  atualizar,
  remover
};

