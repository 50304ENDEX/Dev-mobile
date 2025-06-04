import { View, Text } from 'react-native'
import {axios} from 'axios'
import React, { useState, useEffect } from 'react'


export default function Filmes() {

  const [filmes, setFilmes] = useState([])

  const getFilmes = async () => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params:{
        api_key:'4af17371da1939d7c9c805c8f6f29f30',
        language: 'pt-BR',
      }
    })

  }

  return (
    <View>
      <Text>Form</Text>
    </View>
  )
}