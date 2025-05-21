import { StyleSheet, View, FlatList } from 'react-native'
import { Text } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { Card, Avatar, IconButton} from 'react-native-paper'

import axios from 'axios'

export default function Homescreens(Naviagtion, route) {


    const [usuarios, SetUsuarios] = useState([])

    useEffect(() => {

        axios.get('https://dummyjson.com/users')
        .then(
            (response) => {
                console.log(response.data.users)   
                SetUsuarios(response.data.users)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
    )


    return (
        <View style={styles.container}>
            <FlatList
                data = {usuarios}
                renderItem={({item}) => (
                    <Card style={{ width:450, marginBottom:30, padding: 20}}
                        onPress={() => alert('Clicou no Card')}
                    >
                        <Card.Title 
                            title={item.firstName + ' ' + item.lastName}
                            subtitle={item.email}
                            left={(props) => <Avatar.Image {...props} source={{uri: item.image}} />}
                            right={(props) => <IconButton icon="chevron-right" size={30}/> }
                        />
                    </Card>
                )}          
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})