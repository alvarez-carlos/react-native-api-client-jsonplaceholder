import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { ListItem } from '../components'

const users = [
    {
        id: '1',
        name: 'Leanne'
    },
    {
        id: '2',
        name: 'Jhon'
    }
]



export default ({ navigation }) => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)


  
  // useEffect( () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => {
  //       setUsers(data)
  //       setLoading(false)
  //     })
  //   },
  //   []
  // )


  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonData = await res.json()
    setUsers(jsonData)
    setLoading(false)
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <View style={styles.container}>
      
      {
        loading
        ?
        <Text>Loading...</Text>
        :
        <FlatList 
          data={users}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ListItem ItemName={item.name} 
          onPress={() => navigation.navigate('Posts', { user: item })}
          />}
        />
      }
      
    </View>
  );
}


  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
    item:{
        borderBottomWidth: 1,
        borderColor: '#ccc',
        // height: 40,
        padding: 20,
        justifyContent: 'center',
        color: '#000'
    }
  });
  