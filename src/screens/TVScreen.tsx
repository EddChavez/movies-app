import React from 'react';
import { Dimensions } from 'react-native';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { Category } from '../interfaces/categoryInterface';
import {
  useTopRatedTVShows,
  usePopularTVShows,
  useAiringToday,
  useOnTheAir,
} from '../hooks/tv';
import { Carousel } from '../components/Carousel';
import { Layout } from '../components/Layout';

const { width: windowWidth } = Dimensions.get('window');

export const TVScreen = () => {
  const { popularTVShows, isLoadingPopularTVShows } = usePopularTVShows();
  const { topRatedTVShows, isLoadingTopRatedTVShows } = useTopRatedTVShows();
  const { isLoadingAiringTodayTVShows, airingTodayTVShows } = useAiringToday();
  const { isLoadingOnTheAirTVShows, onTheAirTVShows } = useOnTheAir();

  return (
    <Layout>
      <Carousel
        data={popularTVShows}
        category={Category.Movie}
        windowWidth={windowWidth}
        isLoading={isLoadingPopularTVShows}
      />
      <HorizontalSlider
        title="Emitiéndose actualmente"
        isLoading={isLoadingOnTheAirTVShows}
        movies={onTheAirTVShows}
        category={Category.TVShow}
      />
      <HorizontalSlider
        title="Mejor valorados"
        isLoading={isLoadingTopRatedTVShows}
        movies={topRatedTVShows}
        category={Category.TVShow}
      />
      <HorizontalSlider
        title="Se emiten hoy"
        isLoading={isLoadingAiringTodayTVShows}
        movies={airingTodayTVShows}
        category={Category.TVShow}
      />
    </Layout>
  );
};
