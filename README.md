Npm Install:

npm install -g expo-cli

npx create-expo-app@latest nome --template blank

npm install react-native-paper

npm install react-native-vector-icons react-native-safe-area-context

npm install react-native-paper react-native-vector-icons react-native-safe-area-context

npm install @react-navigation/native

npx expo install react-native-screens react-native-safe-area-context

npm install @react-navigation/bottom-tabs

npx expo install react-native-gesture-handler react-native-reanimated

npm install react-native-paper react-native-vector-icons axios

Sites:

https://reactnavigation.org/

https://reactnativepaper.com/

https://oblador.github.io/react-native-vector-icons/


para construir componente 
rnfes



import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { IconButton, Button } from 'react-native-paper';

export default function HomeScreen() {
  const [showForm, setShowForm] = useState(false);

  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [temperatura, setTemperatura] = useState('');

  const categoriasValidas = ['bebida', 'prato', 'sobremesa'];

  const handleCategoryChange = (text) => {
    const lower = text.toLowerCase();
    setCategory(lower);

    if (!categoriasValidas.includes(lower)) {
      setError('Categoria inválida. Use: bebida, prato ou sobremesa.');
    } else {
      setError('');
    }
  };
  

  const handleSubmit = () => {
    const data = {
      categoria: category,
      nome,
      descricao,
      preco,
      ...(category === 'bebida' && { tamanho, temperatura }),
    };
    console.log('Dados cadastrados:', data);
    setShowForm(false);
    resetForm();
  };

  const resetForm = () => {
    setCategory('');
    setNome('');
    setDescricao('');
    setPreco('');
    setTamanho('');
    setTemperatura('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <IconButton
        icon="plus"
        size={34}
        onPress={() => setShowForm(true)}
        style={styles.fixedButton}
      />

      {showForm && (
        <View style={styles.fullScreenForm}>
          <IconButton
            icon="close"
            size={24}
            onPress={() => {
              setShowForm(false);
              resetForm();
            }}
            iconColor="#000"
            style={styles.closeButton}
          />

          <Text style={styles.formTitle}>Cadastro de Item</Text>

          <TextInput
            placeholder="Categoria (prato, bebida, sobremesa)"
            value={category}
            onChangeText={handleCategoryChange}
            style={styles.input}
          />

          {error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : (
            <>
              <TextInput
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
              />
              <TextInput
                placeholder="Descrição"
                value={descricao}
                onChangeText={setDescricao}
                multiline
                numberOfLines={2}
                style={styles.input}
              />
              <TextInput
                placeholder="Preço"
                value={preco}
                onChangeText={setPreco}
                keyboardType="numeric"
                style={styles.input}
              />

              {category === 'bebida' && (
                <>
                  <TextInput
                    placeholder="Tamanho (ml)"
                    value={tamanho}
                    onChangeText={setTamanho}
                    keyboardType="numeric"
                    style={styles.input}
                  />
                  <TextInput
                    placeholder="Temperatura"
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  fixedButton: {
    position: 'absolute',
    top: 0,
    right: 5,
    zIndex: 10,
  },
  fullScreenForm: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
    zIndex: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: -10,
    marginBottom: 20,
    textAlign: 'center',
  },
});
