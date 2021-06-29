import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function MinusButton({ Plus }) {
  return (
    <TouchableOpacity onPress={Plus} style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          alignItems: 'center',
          color: '#fff',
          lineHeight: 45,
        }}
      >
        {' '}
        플러스!!{' '}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f55354',
    width: 50,
  },
});
