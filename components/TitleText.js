import React from 'react';
import { StyleSheet, Text } from 'react-native';

const BodyText = (props) => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
};

export default BodyText;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});
