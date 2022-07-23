import React from 'react';
import { StyleSheet, View } from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';
import { Category } from '../interfaces/categoryInterface';
import { MoviePoster } from './MoviePoster';
import { Spinner } from './ui/Spinner';

interface Props {
  data: [];
  category: Category;
  windowWidth: number;
  isLoading: boolean;
}

export const Carousel = ({ data, category, windowWidth, isLoading }: Props) => {
  return (
    <View style={styles.carrousel}>
      {isLoading ? (
        <Spinner />
      ) : (
        <SnapCarousel
          data={data}
          renderItem={({ item }: any) => (
            <MoviePoster movie={item} category={category} />
          )}
          sliderWidth={windowWidth}
          itemWidth={300}
          inactiveSlideOpacity={0.9}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carrousel: {
    height: 440,
  },
});
