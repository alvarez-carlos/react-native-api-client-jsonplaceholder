
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({ navigation }) => {
  const user = navigation.getParam('user')
  const post = navigation.getParam('post')
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Post's Details</Text>
          <Text style={styles.details}>User: {user.name}</Text>
          <Text style={styles.details}>Post Title: {post.title}</Text>
          <Text style={styles.details}>Post Body: {post.body}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch', 
      justifyContent: 'flax-start',
    },
    title:{
      fontSize: 20,
      fontWeight: 700,
      backgroundColor: '#eee',
      padding: 20
    },
    details:{
      fontSize: 16,
      // backgroundColor: '#eee',
      padding: 20
    }
  });
  