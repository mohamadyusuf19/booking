import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackIcon from './BackIcon';
import {textColor} from '../../styles/globalStyles';

const Header = ({title, onBack}) => {
  return (
    <View style={styles.wrapHeader}>
      <BackIcon onPress={onBack} />
      <Text style={styles.title}>{title}</Text>
      <View />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: textColor,
    textAlign: 'center',
  },
});
