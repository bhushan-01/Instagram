import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Flpchild from './Flpchild';
import Fldata from '.././flatlistcomponent/Fldata';

const Flpdata = () => {
  const post = [
    {
      key: 1,
      name: 'zeus',
      img: require('../../Images/electrician-g8ba6a2ec1_1920.png'),

      img1: require('../../Images/electrician-g8ba6a2ec1_1920.png'),
    },
    {
      key: 2,
      name: 'zeus',
      img: require('../../Images/electrician-g8ba6a2ec1_1920.png'),

      img1: require('../../Images/electrician-g8ba6a2ec1_1920.png'),
    },
    {
      key: 3,
      name: 'zeus',
      img: require('../../Images/electrician-g8ba6a2ec1_1920.png'),

      img1: require('../../Images/electrician-g8ba6a2ec1_1920.png'),
    },
    {
      key: 4,
      name: 'zeus',
      img: require('../../Images/electrician-g8ba6a2ec1_1920.png'),

      img1: require('../../Images/electrician-g8ba6a2ec1_1920.png'),
    },
    {
      key: 5,
      name: 'zeus',
      img: require('../../Images/electrician-g8ba6a2ec1_1920.png'),

      img1: require('../../Images/electrician-g8ba6a2ec1_1920.png'),
    },
    {
      key: 6,
      name: 'zeus',
      img: require('../../Images/electrician-g8ba6a2ec1_1920.png'),

      img1: require('../../Images/electrician-g8ba6a2ec1_1920.png'),
    },
    {
      key: 7,
      name: 'zeus',
      img: require('../../Images/electrician-g8ba6a2ec1_1920.png'),

      img1: require('../../Images/electrician-g8ba6a2ec1_1920.png'),
    },
  ];
  return (
    <View>
      <Fldata  />
      <FlatList
        data={post}
        renderItem={({ item }) => {
          return (<Flpchild Title={item.name} Img={item.img} Img1={item.img1} />);
        }}
      />
    </View>
  );
};

export default Flpdata;

const styles = StyleSheet.create({});
