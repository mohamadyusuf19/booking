import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {textColor} from '../../styles/globalStyles';

const Button = ({text, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        colors={['#A060FA', '#C800CC']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}
        style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 18,
    color: textColor,
  },
});
