import {TouchableOpacity, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'
import Fldata from '.././flatlistcomponent/Fldata'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Flpchild = (props) => {
  return (
    <View>
      <View style={styles.vn}>
        {/* <Fldata/>*/}
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
          <Image source={props.Img} style={styles.img} />
        </LinearGradient>
        <Text style={styles.t1}>{props.Title}</Text>
      </View>
      <Image source={props.Img1} style={styles.img1} />
      <View style={styles.vz}>
        <TouchableOpacity>
          <Feather name="heart" size={30} color={'black'} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chat-outline"
            size={34}
            style={[styles.icon, {color: 'black',marginTop:8}]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="send"
            size={30}
            style={[styles.icon, {color: 'black'}]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="bookmark"
            size={30}
            style={{marginLeft: 220, marginTop: 13, color: 'black'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Flpchild

const styles = StyleSheet.create({
  vz: {
   flexDirection:'row',
 },
  icon: {
    marginRight: 0,
    
    margin: 10,
    marginLeft:12,
    
},
linear: {
        borderRadius: 10000000000000,
        marginLeft: 11,
        

    },
  vn: {
    flexDirection:'row',
    flex:1,
  }, t1: {
    marginTop: 5,
    marginLeft:7
  },
  img: {
    borderRadius:40,
    height: 30,
    width: 30,
    margin: 4,
    borderWidth: 2,
borderColor:'white'
  },
  img1: {
    width: 440,
    height: 400,
  
  }
})              