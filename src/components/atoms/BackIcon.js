import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {Pressable} from 'react-native';

const BackIcon = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/507/507257.png'}}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    tintColor: '#fff',
  },
});
