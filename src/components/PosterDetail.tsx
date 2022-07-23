import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  posterPath: string;
}

const screenHeight = Dimensions.get('screen').height;

export const PosterDetail = ({ posterPath }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <View style={styles.imageContainer}>
      {!posterPath ? (
        <Icon
          color="#91918D"
          name="broken-image"
          size={130}
          style={{ alignSelf: 'center' }}
        />
      ) : (
        <Image source={{ uri }} style={styles.posterImage} resizeMode="cover" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 7,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  posterImage: {
    flex: 1,
  },
});
