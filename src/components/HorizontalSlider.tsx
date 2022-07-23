import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

import { MoviePoster } from './MoviePoster';
import { Spinner } from './ui/Spinner';
import { Category } from '../interfaces/categoryInterface';

interface Props {
  title?: string;
  isLoading?: boolean;
  movies: Movie[];
  category: Category;
}

export const HorizontalSlider = ({
  title,
  movies,
  isLoading,
  category,
}: Props) => {
  return (
    <View style={containerStyle({ hasTitle: !!title })}>
      {title && <Text style={styles.title}>{title}</Text>}

      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }: any) => (
            <MoviePoster
              movie={item}
              width={140}
              height={200}
              category={category}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const containerStyle = ({ hasTitle }: { hasTitle: boolean }) =>
  StyleSheet.create({
    style: {
      height: hasTitle ? 240 : 200,
      marginBottom: 15,
    },
  }).style;

const styles = StyleSheet.create({
  title: {
    height: 40,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
