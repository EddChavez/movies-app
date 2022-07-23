import React from 'react';
import { Dimensions } from 'react-native';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { Category } from '../interfaces/categoryInterface';
import { Carousel } from '../components/Carousel';
import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from '../hooks/movies';
import { Layout } from '../components/Layout';

const { width: windowWidth } = Dimensions.get('window');

export const MoviesScreen = () => {
  const { nowPlayingMovies, isLoadingNowPlayingMovies } = useNowPlayingMovies();
  const { popularMovies, isLoadingPopularMovies } = usePopularMovies();
  const { topRatedMovies, isLoadingTopRatedMovies } = useTopRatedMovies();
  const { upcomingMovies, isLoadingUpcomingMovies } = useUpcomingMovies();

  return (
    <Layout>
      <Carousel
        data={nowPlayingMovies}
        category={Category.Movie}
        windowWidth={windowWidth}
        isLoading={isLoadingNowPlayingMovies}
      />
      <HorizontalSlider
        title="Populares"
        isLoading={isLoadingPopularMovies}
        movies={popularMovies}
        category={Category.Movie}
      />
      <HorizontalSlider
        title="Mejor valoradas"
        isLoading={isLoadingTopRatedMovies}
        movies={topRatedMovies}
        category={Category.Movie}
      />
      <HorizontalSlider
        title="Próximas"
        isLoading={isLoadingUpcomingMovies}
        movies={upcomingMovies}
        category={Category.Movie}
      />
    </Layout>
  );
};
