
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { ListItem } from '../components'
export default ({ navigation }) => {

  const user = navigation.getParam('user') 
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsonData = await res.json()
    setPosts(jsonData)
    setLoading(false)
  }

  useEffect(() => { 
    fetchPosts()
  }, [])

  return (
    <View style={styles.container}>
      {
        loading
        ?
        <Text>Loading...</Text>
        :
        <View>
          <View>
            <Text style={styles.title}>{user.name}'s Posts</Text>
          </View>
          <View>
            <FlatList
              // data={posts}
              data={posts.filter(x => x.userId = user.id)}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <ListItem 
                // ItemName={item.userId + ' -- ' +item.title}
                ItemName={item.title}
                onPress={() => navigation.navigate('Details', { user: user, post: item })}
              />}
            />
          </View>
        </View>
        
      }
    </View>
  );
}


  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize: 20,
      fontWeight: 700,
      backgroundColor: '#eee',
      padding: 20
    }
  });
  