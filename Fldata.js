import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import Flchild from './Flchild';

const Fldata = () => {
    const stories = [
      {
        key: 1,
        name: 'Zeus',
        img: require('.././../Images/electrician-g8ba6a2ec1_1920.png'),
      },
      {
        key: 2,
        name: 'Leon',
        img: require('.././../Images/nx.png'),
      },
      {
        key: 3,
        name: 'Hades',
        img: require('.././../Images/woman-g163bcdfbf_1920.jpeg'),
      },
      {
        key: 4,
        name: 'Prime',
        img: require('.././../Images/icon-gf8e0eeccd_1920.png'),
      },
      {
        key: 5,
        name: 'Nexus',
        img: require('.././../Images/electrician-g8ba6a2ec1_1920.png'),
      },
      {
        key: 6,
        name: 'Bumble',
        img: require('.././../Images/icon-gf8e0eeccd_1920.png'),
      },

      {
        key: 7,
        name: 'Vortex',
        img: require('.././../Images/woman-g163bcdfbf_1920.jpeg'),
      },
      {
        key: 8,
        name: 'Hex',
        img: require('.././../Images/electrician-g8ba6a2ec1_1920.png'),
      },
      {
        key: 9,
        name: 'Spartan',
        img: require('.././../Images/nx.png'),
      },
      {
        key: 10,
        name: 'Rage',
        img: require('.././../Images/electrician-g8ba6a2ec1_1920.png'),
      },
      {
        key: 11,
        name: 'Izon',
        img: require('.././../Images/woman-g163bcdfbf_1920.jpeg'),
      },
    ];
  return (
    <View>
          <FlatList
              horizontal={true}
              data={stories}
              renderItem={({item}) => {
                  return (
                      <Flchild Title={item.name} Image= {item.img} />
                      
                  )
              }}
          />
          
    </View>
  )
}

export default Fldata

const styles = StyleSheet.create({})