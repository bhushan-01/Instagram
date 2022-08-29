import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';
const Flchild = (props) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity >
        <LinearGradient
          colors={[
            '#405DE6',
            '#5851DB',
            '#833AB4',
            '#C13584',
            '#E1306C',
            '#FD1D1D',
            '#F56040',
            '#F77737',
            '#FCAF45',
            '#FFDC80',
          ]}
          style={styles.linear}>
          <Image source={props.Image} style={styles.img} />
        </LinearGradient>
        <Text style={styles.text}>{props.Title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Flchild

const styles = StyleSheet.create({
    
    view: {
    marginTop: 10,
      marginBottom:10,
        
    },

        text: {
        textAlign: 'center',
        color: 'black',
        fontSize:18
        
    },
    img:
    {
        margin:4,
        height: 50,
        width: 50,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius:100
        
    },
    linear: {
        borderRadius: 10000000000000,
        marginLeft: 8,
        marginRight:8,

    }
    
})