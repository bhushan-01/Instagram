import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Searchchild = (props) => {
  return (
    <View>
          <Image source={props.Img} style={styles.img } />
    </View>
  )
}

export default Searchchild

const styles = StyleSheet.create({
    img: {
        height: 50,
        width: 50,
    }
})