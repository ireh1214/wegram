import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function MinusButton({ Minus }) {
  return (
    <TouchableOpacity onPress={Minus} style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          alignItems: 'center',
          color: '#fff',
          lineHeight: 45,
        }}
      >
        {' '}
        마이너스!!{' '}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#586fab',
    width: 50,
    height: 50,
  },
});
