import useGetData from '../api/useGetData';

export const usePopularMovies = () => {
  const { data, isFetching } = useGetData('movie/popular');

  return {
    isLoadingPopularMovies: isFetching,
    popularMovies: data?.results || [],
  };
};
