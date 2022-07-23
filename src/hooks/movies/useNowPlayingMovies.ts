import useGetData from '../api/useGetData';

export const useNowPlayingMovies = () => {
  const { data, isFetching } = useGetData('movie/now_playing');

  return {
    isLoadingNowPlayingMovies: isFetching,
    nowPlayingMovies: data?.results || [],
  };
};
