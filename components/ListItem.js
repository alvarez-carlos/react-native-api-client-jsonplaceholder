import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

export default ({ ItemName, onPress }) => {
    return (
        <TouchableOpacity style={styles.item} onPress={onPress} >
            <Text >{ItemName}</Text>   
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        borderBottomWidth: 1,
        borderColor: '#ccc',
        // height: 40,
        padding: 20,
        justifyContent: 'center',
        color: '#000'
    }
})