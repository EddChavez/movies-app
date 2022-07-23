import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const Spinner = () => (
  <View style={styles.loading}>
    <ActivityIndicator color="red" size={50} />
  </View>
);

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
