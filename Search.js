import { StyleSheet, Text,TextInput, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Searchdata from './Component/Searchdata'
const Search = () => {
  return (
    <View style={styles.cont}>
      <View>
      
      </View>
    <View style={styles.v1}>
        <Feather name='search' size={25} style={styles.icon} />
      <TextInput placeholder='Search'/>
      </View>
      <Searchdata/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  v1: {
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    margin: 10,

    borderRadius:19,
  },
  icon: {
    marginTop: 10,
    margin: 10,
    marginLeft:12
  }
})