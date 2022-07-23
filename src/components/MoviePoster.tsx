import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Category } from '../interfaces/categoryInterface';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  category: Category;
}

export const MoviePoster = ({
  movie,
  height = 420,
  width = 300,
  category,
}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', { movie, category })}
      activeOpacity={0.7}
      style={touchableOpacityStyle({ height, width })}
    >
      <View style={styles.imageContainer}>
        {!movie.poster_path ? (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Icon
              color="#91918D"
              name="broken-image"
              size={40}
              style={{ alignSelf: 'center' }}
            />
          </View>
        ) : (
          <Image source={{ uri }} style={styles.image} resizeMode="stretch" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const touchableOpacityStyle = ({
  height,
  width,
}: Pick<Props, 'width' | 'height'>) =>
  StyleSheet.create({
    style: {
      width,
      height,
      marginHorizontal: 7,
      marginBottom: 20,
    },
  }).style;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: -10,
      height: -10,
    },
    shadowOpacity: 0.2,
    elevation: 9,
    shadowRadius: 7,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
});
