import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Card, Text, IconButton } from 'react-native-paper'
export default function MenuScreen() {

  const [pratos, setPratos] = useState([])
  const [expandido, setExpandido] = useState({})
  const [favoritos, setFavoritos] = useState({})

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setPratos(response.data.categories)
      })
      .catch(error => {
        console.error("Erro ao buscar pratos:", error)
      })
  }, [])

  const toggleExpandir = (id) => {
    setExpandido(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleFavorito = (id) => {
    setFavoritos(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const renderItem = ({ item }) => (
    <Card style={styles.card} onPress={() => toggleExpandir(item.idCategory)}>
      <Card.Cover source={{ uri: item.strCategoryThumb }} />
      <Card.Title
        title={item.strCategory}
        right={(props) => (
          <View style={{ flexDirection: 'row' }}>
            <IconButton
              {...props}
              icon={favoritos[item.idCategory] ? 'star' : 'star-outline'}
              iconColor={favoritos[item.idCategory] ? '#FFD700' : undefined}
              onPress={() => toggleFavorito(item.idCategory)}
            />
            <IconButton
              {...props}
              icon={expandido[item.idCategory] ? 'chevron-up' : 'chevron-down'}
              onPress={() => toggleExpandir(item.idCategory)}
            />
          </View>
        )}
      />
      <Card.Content>
        <Text variant="bodySmall" numberOfLines={expandido[item.idCategory] ? undefined : 2}>
          {item.strCategoryDescription}
        </Text>
      </Card.Content>
    </Card>
  )


  return (
    <View style={styles.container}>
       <FlatList
         data={pratos}
         keyExtractor={(item) => item.idCategory}
         renderItem={renderItem}
       />
     </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 45,
  },
  card: {
    margin: 10,
  },
})
