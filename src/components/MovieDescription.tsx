import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const MovieDescription = ({ movie, shareOptHandler }: any) => {
  return (
    <View style={styles.marginContainer}>
      <View style={{ flex: 1 }}>
        <Text style={styles.subTitle}>
          {movie.original_title || movie.name}
        </Text>
        <Text style={styles.title}>{movie.title || movie.original_name}</Text>
      </View>
      <View style={{ justifyContent: 'flex-end', marginHorizontal: 10 }}>
        <TouchableOpacity onPress={shareOptHandler} activeOpacity={0.7}>
          <Icon color="#3B3B39" name="qr-code-2" size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
