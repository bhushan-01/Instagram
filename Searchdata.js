import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react'
import Searchchild from './Searchchild';


const Searchdata = () => {
    const arr = [
      {
        id: 1,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 2,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 3,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 4,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 5,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 6,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 7,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 8,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 9,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 10,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 11,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 12,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 13,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 14,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 15,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 16,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 17,
        img: require('../../Images/spartan-g1641e8d30_1920.jpeg'),
      },
      {
        id: 18,
        img:require('../../Images/spartan-g1641e8d30_1920.jpeg')
    },
    {
        id: 19,
        img:require('../../Images/spartan-g1641e8d30_1920.jpeg')
    },
    {
        id: 20,
        img:require('../../Images/spartan-g1641e8d30_1920.jpeg')
    },

    ];
  return (
    <View>
      <FlatList
        data={arr}
        
        renderItem={({item}) => {
          return <Searchchild Img={item.img} />;
        }}
      />
    </View>
  );
}

export default Searchdata  

const styles = StyleSheet.create({})