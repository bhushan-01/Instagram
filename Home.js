import {StyleSheet, Text, View, TouchableOpacity,ScrollView} from 'react-native';
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from'react-native-vector-icons/MaterialCommunityIcons';

import Flpdata from './flpost/Flpdata'


const Home = () => {
  return (
    <View style={styles.v1}>

        <View style={styles.v2}>
          <Text style={styles.t1}>Instagram</Text>

          <TouchableOpacity style={styles.i1}>
            <FontAwesome
              name="plus-square-o"
              size={35}
              style={{color: 'black'}}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.i2}>
            <MaterialCommunityIcons
              name="facebook-messenger"
              size={35}
              style={{color: 'black'}}
            />
          </TouchableOpacity>
        </View>
        
      

        <Flpdata/>

    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  v1: {
    backgroundColor: '#fff',
    flex: 1,
  },
  t1: {
    fontFamily: 'Pacifico-Regular',
    color: 'black',
    fontSize: 35,
    marginLeft: 10,
  },
  v2: {
    flexDirection: 'row',
  },
  i1: {
    color: 'black',
    marginTop: '6%',
    marginLeft: '35%',
  },
  i2: {
    color: 'black',
    marginTop: '5.5%',
    marginLeft: '5%',
  },
});
  