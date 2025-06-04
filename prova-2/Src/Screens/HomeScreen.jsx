import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Button } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import { IconButton } from 'react-native-paper';

export default function HomeScreen() {
    
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState('');



  return (
    <View style={styles.container}>
      <IconButton
        icon="plus"
        size={40}
        style={styles.plusButton}
        onPress={() => setShowForm(true)}
      />

      <Modal visible={showForm} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>

            <Text style={styles.modalTitle}>Adicionar Item</Text>

            <TextInput
              placeholder="Nome da tarefa"
              value={inputValue}
              onChangeText={setInputValue}
              style={styles.input}
            />


            <Button title="Salvar"  />
            <Button title="Cancelar" onPress={() => setShowForm(false)} color="gray" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  plusButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});
