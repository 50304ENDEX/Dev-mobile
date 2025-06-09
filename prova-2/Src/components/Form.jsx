import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';


export default function Form() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [category, setCategory] = useState('');

  const categories = [
    { label: 'Prato', value: 'prato' },
    { label: 'Bebida', value: 'bebida' },
    { label: 'Sobremesa', value: 'sobremesa' },
  ];

  // Campos comuns
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  // Campos específicos (exemplo)
  const [tamanho, setTamanho] = useState('');
  const [temperatura, setTemperatura] = useState('');

  const handleSubmit = () => {
    const data = {
      tipo: category,
      nome,
      descricao,
      preco,
      ...(category === 'bebida' && { tamanho, temperatura }),
    };
    console.log('Dados cadastrados:', data);
    // Aqui você pode enviar para uma API ou banco de dados
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Cadastro de Itens</Text>

      <DropDown
        label={'Categoria'}
        mode={'outlined'}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={category}
        setValue={setCategory}
        list={categories}
      />

      {category !== '' && (
        <>
          <TextInput
            label="Nome"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />

          <TextInput
            label="Descrição"
            value={descricao}
            onChangeText={setDescricao}
            multiline
            numberOfLines={3}
            style={styles.input}
          />

          <TextInput
            label="Preço"
            value={preco}
            onChangeText={setPreco}
            keyboardType="numeric"
            style={styles.input}
          />

          {category === 'bebida' && (
            <>
              <TextInput
                label="Tamanho (ml)"
                value={tamanho}
                onChangeText={setTamanho}
                keyboardType="numeric"
                style={styles.input}
              />

              <TextInput
                label="Temperatura (ex: gelada)"
                value={temperatura}
                onChangeText={setTemperatura}
                style={styles.input}
              />
            </>
          )}

          <Button mode="contained" onPress={handleSubmit}>
            Cadastrar
          </Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  input: {
    marginBottom: 10,
  },
});
